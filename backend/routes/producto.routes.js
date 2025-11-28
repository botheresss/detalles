const express = require('express');
const router = express.Router();
const productoController = require("../controllers/producto.controller.js");

router.post('/productos', productoController.createProducto);
router.put('/productos/:id', productoController.updateProducto);
router.delete('/productos/:id', productoController.deleteProducto);
router.get('/productos', productoController.getProductos);
router.get('/productos/:id', productoController.getProductoById);

module.exports = router;