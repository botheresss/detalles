const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: true,
            maxlenght: 100,
        },
        descripcion: {
            type: String,
            required: true,
            trim: true,
            maxlenght: 250,
        },
        precio: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 7,
        },
        imagen: {
            type: String, 
            trim: true,
            required: false,
        }
    },
    {
        timestamps: true,
        versionKey: false, 
    }
);

module.exports = mongoose.model('producto', productoSchema)