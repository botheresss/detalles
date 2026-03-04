const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

app.use(cors({
    origin: [
        process.env.CORS_ORIGIN,        // URL del frontend (S3 o CloudFront)
        'http://localhost:4200'          // Para desarrollo local
    ].filter(Boolean),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
    res.send("Backend funcionando");
});


const productoRoutes = require('./routes/producto.routes.js');
app.use('/api/productos', productoRoutes);

const userRoutes = require('./routes/user.routes.js');
app.use('/api/usuarios', userRoutes);

async function start(retries = 10, delay = 3000) {
    for (let i = 1; i <= retries; i++) {
        try {
            await mongoose.connect(mongoURI);
            console.log('Conectado a MongoDB');
            app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));
            return;
        } catch (err) {
            console.error(`Intento ${i}/${retries} - Error conectando a MongoDB: ${err.message}`);
            if (i < retries) {
                console.log(`Reintentando en ${delay / 1000}s...`);
                await new Promise(res => setTimeout(res, delay));
                delay = Math.min(delay * 1.5, 30000); // backoff hasta 30s máximo
            } else {
                console.error('No se pudo conectar a MongoDB. Saliendo.');
                process.exit(1);
            }
        }
    }
}

start();