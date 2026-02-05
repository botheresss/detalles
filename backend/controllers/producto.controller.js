const productoService = require('../services/producto.service');

const createProducto = async (req, res) => {
    try {
        const producto = await productoService.createProducto(req.body);

        res.status(201).json({
            message: 'Producto creado con éxito',
            producto,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const updateProducto = async (req, res) => {
    try {
        const producto = await productoService.updateProducto(
            req.params.id,
            req.body
        );

        res.status(200).json({
            message: 'Producto actualizado con éxito',
            producto,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const deleteProducto = async (req, res) => {
    try {
        const producto = await productoService.deleteProducto(req.params.id);

        res.status(200).json({
            message: 'Producto eliminado exitosamente',
            producto,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const getProductos = async (req, res) => {
    try {
        const productos = await productoService.getProductos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductoById = async (req, res) => {
    try {
        const producto = await productoService.getProductoById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createProducto,
    updateProducto,
    deleteProducto,
    getProductos,
    getProductoById,
};
