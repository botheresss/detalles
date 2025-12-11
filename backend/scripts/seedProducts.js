const mongoose = require("mongoose");
const Producto = require("./models/producto.model.js"); 
require("dotenv").config();

const productos = [
  { nombre: "Elegante champaña con chocolates y rosas", categoria: "damas", imagen: "/images/Productos/damas/imagen1.webp", descripcion: "Un detalle de lujo...", precio: 95000 },
  { nombre: "Preciosos chocolates con rosas", categoria: "damas", imagen: "/images/Productos/damas/imagen2.webp", descripcion: "Un regalo delicado...", precio: 75000 },
  { nombre: "Preciosos chocolates con rosa", categoria: "damas", imagen: "/images/Productos/damas/imagen3.webp", descripcion: "Una combinación irresistible...", precio: 70000 },
  { nombre: "Champan con chocolates ferrero", categoria: "damas", imagen: "/images/Productos/damas/imagen4.webp", descripcion: "El regalo ideal...", precio: 88000 },
  { nombre: "Crema Baylees con chocolates Ferrero, Rosas y un poema", categoria: "damas", imagen: "/images/Productos/damas/imagen5.webp", descripcion: "Un detalle único...", precio: 99000 },
  { nombre: "Frasquitos con almendras y chocolates con foto y coronita", categoria: "damas", imagen: "/images/Productos/damas/imagen6.webp", descripcion: "Original y encantador...", precio: 80000 },
  { nombre: "Preciosos chocolates con fondo rosado", categoria: "damas", imagen: "/images/Productos/damas/imagen7.webp", descripcion: "Una presentación delicada...", precio: 72000 },
  { nombre: "Arreglo de Rosas con Mariposas", categoria: "damas", imagen: "/images/Productos/damas/imagen8.webp", descripcion: "Un arreglo floral...", precio: 89000 },
  { nombre: "Arreglo floral con vino", categoria: "damas", imagen: "/images/Productos/damas/imagen9.webp", descripcion: "El equilibrio perfecto...", precio: 98000 },

  { nombre: "Frasquitos con frutos secos y chocolates con dos cervezas", categoria: "caballeros", imagen: "/images/Productos/caballeros/imagen10.webp", descripcion: "Un detalle moderno...", precio: 87000 },
  { nombre: "Frasquitos con frutos secos y chocolates con cerveza y vaso", categoria: "caballeros", imagen: "/images/Productos/caballeros/imagen11.webp", descripcion: "Un regalo práctico...", precio: 82000 },
  { nombre: "Cajita con globito, cerveza y chocolates", categoria: "caballeros", imagen: "/images/Productos/caballeros/imagen12.webp", descripcion: "Un obsequio alegre...", precio: 78000 },
  { nombre: "Preciosos chocolates con fondo azul", categoria: "caballeros", imagen: "/images/Productos/caballeros/imagen13.webp", descripcion: "Elegante y sobrio...", precio: 70000 },

  { nombre: "Preciosos chocolates con fondo rosado o azul", categoria: "todos", imagen: "/images/Productos/generales/imagen14.webp", descripcion: "Un diseño versátil...", precio: 75000 },
  { nombre: "Baylees con chocolates ferrero preciosa decoración dorada", categoria: "todos", imagen: "/images/Productos/generales/imagen15.webp", descripcion: "Un regalo con clase...", precio: 99000 },
  { nombre: "Vino con chocolates con una decoración dorada", categoria: "todos", imagen: "/images/Productos/generales/imagen16.webp", descripcion: "Una combinación atemporal...", precio: 93000 },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🔥 Conectado a MongoDB");

    // Limpia la colección (opcional)
    await Producto.deleteMany({});
    console.log("🧹 Colección limpiada");

    // Inserta todo
    await Producto.insertMany(productos);
    console.log("✅ Productos insertados correctamente");

    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

seed();

