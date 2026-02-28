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

async function start() {
    try {
        await mongoose.connect(mongoURI);
        console.log('conectado a MongoDB');
        app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));
    } catch (err) {
        console.error('Error conectando a MongoDB:', err.message);
    }
}



start();