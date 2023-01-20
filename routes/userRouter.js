var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");

// MIDDLEWARES
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/register', guestMiddleware, userController.register);
router.post('/register', validations, userController.registerProcess);
router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcess);
router.get('/profile', authMiddleware, userController.profile);
router.get('/logout/', userController.logout)

module.exports = router;
