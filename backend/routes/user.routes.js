const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post('/usuarios', async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    const nuevoUsuario = new User({ nombre, email, password, rol });
    await nuevoUsuario.save();
    res.status(201).json({
        message: 'usuario creado con exito',
        nuevoUsuario,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creando usuario', error: error.message });
  }
});

module.exports = router;