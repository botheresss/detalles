const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller.js")

router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getUsers);

module.exports = router;