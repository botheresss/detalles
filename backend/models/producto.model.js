const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
      maxlength: 250,
    },
    precio: {
      type: Number,
      required: true,
    },
    imagen: {
      type: String, 
      trim: true,
      required: false,
    },
    categoria: {
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

module.exports = mongoose.model('producto', productoSchema);
