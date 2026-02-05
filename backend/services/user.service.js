// services/user.service.js
const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// crear usuario
const createUser = async ({ nombre, email, password, rol }) => {
    if (!nombre || !email || !password) {
        throw new Error("nombre, email y password son requeridos");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        nombre,
        email,
        password: hashedPassword,
        rol,
    });

    await newUser.save();
    return newUser;
};

// generar token
const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        rol: user.rol,
    };

    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );
};

// login
const loginUser = async ({ email, password }) => {
    if (!email || !password) {
        throw new Error("Email y password son requeridos");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error("Password incorrecto");
    }

    const token = generateToken(user);

    return {
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        token,
    };
};

// obtener usuarios (con token ya validado)
const getUsers = async () => {
    return await User.find();
};

module.exports = {
    createUser,
    loginUser,
    getUsers,
};
