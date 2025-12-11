const mongoose = require("mongoose");
const Producto = require("../models/producto.model.js");
require("dotenv").config();

const productos = [
  { nombre: "Elegante champaña con chocolates y rosas", categoria: "damas", imagen: "/images/Productos/damas/Detalle2.jpeg", descripcion: "Un detalle de lujo...", precio: 95000 },
  { nombre: "Preciosos chocolates con rosas", categoria: "damas", imagen: "/images/Productos/damas/Detalle3.jpeg", descripcion: "Un regalo delicado...", precio: 75000 },
  { nombre: "Preciosos chocolates con rosa", categoria: "damas", imagen: "/images/Productos/damas/Detalle4.jpeg", descripcion: "Una combinación irresistible...", precio: 70000 },
  { nombre: "Champan con chocolates ferrero", categoria: "damas", imagen: "/images/Productos/damas/Detalle5.jpeg", descripcion: "El regalo ideal...", precio: 88000 },
  { nombre: "Crema Baylees con chocolates Ferrero, Rosas y un poema", categoria: "damas", imagen: "/images/Productos/damas/Detalle6.jpeg", descripcion: "Un detalle único...", precio: 99000 },
  { nombre: "Frasquitos con almendras y chocolates con foto y coronita", categoria: "damas", imagen: "/images/Productos/damas/Detalle8.jpeg", descripcion: "Original y encantador...", precio: 80000 },
  { nombre: "Preciosos chocolates con fondo rosado", categoria: "damas", imagen: "/images/Productos/damas/Detalle9.jpeg", descripcion: "Una presentación delicada...", precio: 72000 },
  { nombre: "Arreglo de Rosas con Mariposas", categoria: "damas", imagen: "/images/Productos/damas/Detalle10.jpeg", descripcion: "Un arreglo floral lleno de vida...", precio: 89000 },
  { nombre: "Arreglo floral con vino", categoria: "damas", imagen: "/images/Productos/damas/Detalle11.jpeg", descripcion: "El equilibrio perfecto...", precio: 98000 },
  { nombre: "Rosa rosada con arreglo de chocolates", categoria: "damas", imagen: "/images/Productos/damas/Detalle12.jpeg", descripcion: "Un toque de elegancia...", precio: 70000},

  // CABALLEROS
  { nombre: "Frasquitos con frutos secos y chocolates con dos cervezas", categoria: "caballeros", imagen: "/images/Productos/caballeros/Detalle1.jpeg", descripcion: "Un detalle moderno...", precio: 87000 },
  { nombre: "Frasquitos con frutos secos y chocolates con cerveza y vaso", categoria: "caballeros", imagen: "/images/Productos/caballeros/Detalle2.jpeg", descripcion: "Un regalo práctico...", precio: 82000 },
  { nombre: "Cajita con globito, cerveza y chocolates", categoria: "caballeros", imagen: "/images/Productos/caballeros/Detalle3.jpeg", descripcion: "Un obsequio alegre...", precio: 78000 },
  { nombre: "Preciosos chocolates con fondo azul", categoria: "caballeros", imagen: "/images/Productos/caballeros/Detalle4.jpeg", descripcion: "Elegante y sobrio...", precio: 70000 },

  // TODOS
  { nombre: "Preciosos chocolates con fondo rosado o azul", categoria: "todos", imagen: "/images/Productos/generales/Detalle1.jpeg", descripcion: "Un diseño versátil...", precio: 75000 },
  { nombre: "Baylees con chocolates ferrero preciosa decoración dorada", categoria: "todos", imagen: "/images/Productos/generales/Detalle2.jpeg", descripcion: "Un regalo con clase...", precio: 99000 },
  { nombre: "Vino con chocolates con una decoración dorada", categoria: "todos", imagen: "/images/Productos/generales/Detalle3.jpeg", descripcion: "Una combinación atemporal...", precio: 93000 }
];

async function cargar() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a MongoDB");

    await Producto.deleteMany();
    console.log("Productos anteriores eliminados");

    await Producto.insertMany(productos);
    console.log("Productos insertados correctamente");

    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

cargar();
