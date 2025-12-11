const express = require('express');
const router = express.Router();
const productoController = require("../controllers/producto.controller.js");
const authRequired = require("../middlewares/auth.middleware.js");
const adminOnly = require("../middlewares/admin.middleware.js");

console.log("authRequired:", authRequired);
console.log("adminOnly:", adminOnly);
console.log("createProducto:", productoController.createProducto);


router.post('/', authRequired, adminOnly, productoController.createProducto);
router.put('/:id', authRequired, adminOnly, productoController.updateProducto);
router.delete('/:id', authRequired, adminOnly,  productoController.deleteProducto);
router.get('/', productoController.getProductos);
router.get('/:id', productoController.getProductoById);

module.exports = router;