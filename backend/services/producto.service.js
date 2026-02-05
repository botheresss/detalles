const Producto = require('../models/producto.model');

const createProducto = async (data) => {
    const { nombre, descripcion, precio, imagenNombre } = data;

    if (!nombre || !descripcion || !precio) {
        throw new Error('nombre, descripcion y precio son requeridos');
    }

    let imagenPath = null;
    if (imagenNombre) {
        imagenPath = `/frontend/images/${imagenNombre}`;
    }

    const nuevoProducto = new Producto({
        nombre,
        descripcion,
        precio,
        imagen: imagenPath,
    });

    return await nuevoProducto.save();
};

const updateProducto = async (id, data) => {
    const producto = await Producto.findById(id);

    if (!producto) {
        throw new Error('Producto no encontrado');
    }

    if (data.nombre !== undefined) producto.nombre = data.nombre;
    if (data.descripcion !== undefined) producto.descripcion = data.descripcion;
    if (data.precio !== undefined) producto.precio = data.precio;
    if (data.imagenNombre !== undefined) producto.imagen = data.imagenNombre;
    if (data.categoria !== undefined) producto.categoria = data.categoria;

    return await producto.save();
};

const deleteProducto = async (id) => {
    const producto = await Producto.findByIdAndDelete(id);

    if (!producto) {
        throw new Error('Producto no encontrado');
    }

    return producto;
};

const getProductos = async () => {
    return await Producto.find();
};

const getProductoById = async (id) => {
    const producto = await Producto.findById(id);

    if (!producto) {
        throw new Error('Producto no encontrado');
    }

    return producto;
};

module.exports = {
    createProducto,
    updateProducto,
    deleteProducto,
    getProductos,
    getProductoById,
};
