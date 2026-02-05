const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://detallesdemo1532_db_user:Chocolate1346+@pruebas.atio08l.mongodb.net/?appName=pruebas";
const client = new MongoClient(uri);

const baseProductos = [
    {
        nombre: "Elegante champaña con chocolates y rosas",
        descripcion: "Un detalle de lujo...",
        precio: 95000,
        imagen: "/assets/Productos/damas/Detalle2.jpeg",
        categoria: "Damas",
    },
    {
        nombre: "Preciosos chocolates con rosas",
        descripcion: "Un regalo delicado...",
        precio: 75000,
        imagen: "/assets/Productos/damas/Detalle3.jpeg",
        categoria: "Damas",
    },
    {
        nombre: "Frasquitos con frutos secos y chocolates con dos cervezas",
        descripcion: "Un detalle moderno...",
        precio: 87000,
        imagen: "/assets/Productos/caballeros/Detalle1.jpeg",
        categoria: "Caballeros",
    },
    {
        nombre: "Frasquitos con frutos secos y chocolates con cerveza y vaso",
        descripcion: "Un regalo práctico...",
        precio: 82000,
        imagen: "/assets/Productos/caballeros/Detalle2.jpeg",
        categoria: "Caballeros",
    },
    {
        nombre: "Baylees con chocolates ferrero preciosa decoración dorada",
        descripcion: "Un regalo con clase...",
        precio: 99000,
        imagen: "/assets/Productos/generales/Detalle2.jpeg",
        categoria: "Todos",
    },
    {
        nombre: "Vino con chocolates con una decoración dorada",
        descripcion: "Una combinación atemporal...",
        precio: 93000,
        imagen: "/assets/Productos/generales/Detalle3.jpeg",
        categoria: "Todos",
    },
];

async function seed() {
    await client.connect();
    const db = client.db("demoProductos");
    const col = db.collection("productos");

    console.log("Limpiando colección...");
    await col.deleteMany({});

    const productos = [];

    for (let i = 0; i < 3000; i++) {
        const base = baseProductos[i % baseProductos.length];

        productos.push({
            ...base,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    console.log("Insertando 3000 productos...");
    await col.insertMany(productos);

    console.log("✅ DB demo lista");
    await client.close();
}

seed();
