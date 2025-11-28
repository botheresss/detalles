const Producto = require('../models/producto.model.js');

const createProducto = async (req, res) => {
    try {
        const {nombre, descripcion, precio, imagenNombre} = req.body;

        if (!nombre || !descripcion || !precio) {
            return res.status(400).json({
            message: 'nombre, descripcion y precio son requeridos',
            });
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
        
        await nuevoProducto.save();

            return res.status(201).json({
                message: 'Producto creado con éxito',
                producto: nuevoProducto,
            });

    } catch (err) {
        return res.status(400).json({
            message: 'Error al crear el producto',
            error: err,
        })
    }
};

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombre, descripcion, precio, imagenNombre} = req.body;

        const producto = await Producto.findById(id);

        if (!producto) {
            return res.status(404).json({
                message: 'Producto no encontrado',
            });
        }

        if (nombre !== undefined) {
            producto.nombre = nombre;
        }

        if (descripcion !== undefined) {
            producto.descripcion = descripcion;
        }

        if (precio !== undefined) {
            producto.precio = precio;
        }

        if (imagenNombre !== undefined) {
            producto.imagen = imagenNombre
        }

        await producto.save();

        return res.status(200).json({
            message: 'Producto actualizado con éxito',
            producto,
        });
        

    } catch (err) {
        return res.status(400).json({
            message: 'Error al editar el producto',
            error: err,
        })
    }
};

const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const productoEliminado = await Producto.findByIdAndDelete(id);

        if (!productoEliminado){
            return res.status(404).json({
                message: 'Producto no encontrado',
            });
        }

        return res.status(200).json({
            message: 'producto eliminado exitosamente',
            productoEliminado,
        })

    } catch (err) {
        return res.status(400).json({
            message: 'Error al eliminar el producto',
            error: err,
        })
    }
};

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // trae todos

    return res.status(200).json(productos);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener los productos',
      error: error.message,
    });
  }
};

const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({
        message: 'Producto no encontrado',
      });
    }

    return res.status(200).json(producto);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener el producto',
      error: error.message,
    });
  }
};



module.exports = {
    createProducto,
    updateProducto,
    deleteProducto,
    getProductos,
    getProductoById,
}