const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try{
        const {nombre, email, password, rol} = req.body;

        if (!nombre || !email || !password ) {
            return res.status(400).json({
                message : "nombre, email y password son requeridos",
            })
        }
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ nombre, email, password: hashedPassword, rol });

        await newUser.save();

        res.status(201).json({ message: 'usuario creado con exito', user: newUser });
    } catch (err) {
        return res.status(400).json({
            message: "Error al crear el usuario",
            error: err,
        })
    }
};

const getUsers = async (req, res) => {
    try {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({ message: "Token no proporcionado" });
        }

        const verificado = jwt.verify(token, process.env.JWT_SECRET);

        if (!verificado) {
            return res.status(403).json({ message: "Token inválido" });
        }

        const usuarios = await User.find();

        return res.status(200).json({
            message: "Usuarios obtenidos con éxito",
            usuarios,
        });

    } catch (err) {
        return res.status(401).json({
            message: "Token inválido o expirado",
            error: err.message,
        });
    }
};

const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        rol: user.rol,
    }
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    }
    return jwt.sign(payload, secret, options);
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email y password son requeridos' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Password incorrecto' });
        }
        
        const token = generateToken(user);

        return res.status(200).json({
            message: 'Login exitoso',
            nombre: user.nombre,
            email: user.email,

            token: token,
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Error al iniciar sesión',
            error: error.message
        });
    }
};


module.exports = {
    createUser,
    loginUser,    
    getUsers,
};
