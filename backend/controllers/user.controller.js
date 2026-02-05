const jwt = require("jsonwebtoken");
const userService = require("../services/user.service.js");

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);

        res.status(201).json({
            message: "usuario creado con éxito",
            user,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body);

        res.status(200).json({
            message: "Login exitoso",
            ...result,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).json({ message: "Token no proporcionado" });
        }

        jwt.verify(token, process.env.JWT_SECRET);

        const usuarios = await userService.getUsers();

        res.status(200).json({
            message: "Usuarios obtenidos con éxito",
            usuarios,
        });
    } catch (error) {
        res.status(401).json({
            message: "Token inválido o expirado",
            error: error.message,
        });
    }
};

module.exports = {
    createUser,
    loginUser,
    getUsers,
};
