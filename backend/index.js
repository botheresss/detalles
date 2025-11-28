const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const productoRoutes = require('./routes/producto.routes.js');
app.use('/api', productoRoutes);

const userRoutes = require('./routes/user.routes.js');
app.use('/api', userRoutes);

async function start(){
    try{
        await mongoose.connect(mongoURI);
        console.log('conectado a MongoDB Atlas');
        app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));
    }catch(err){
        console.error('Error conectando a MongoDB:', err.message);
    }
}



start();