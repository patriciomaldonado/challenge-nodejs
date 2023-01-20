const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");
const multer = require('multer');
const path = require("path");
const { body } = require("express-validator");

// MIDDLEWARES
const clientMiddleware = require('../middlewares/clientMiddleware');
const validateCreationMiddleware = require('../middlewares/validateCreationMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', movieController.index);
router.get('/detalle/:id', authMiddleware, movieController.detail);
router.get('/create', authMiddleware, clientMiddleware, movieController.create);
router.post('/create', validateCreationMiddleware, movieController.store); 
router.get('/edit/:id', authMiddleware, clientMiddleware, movieController.edit); 
router.post('/edit/:id', movieController.update); 
router.post('/delete/:id', authMiddleware, clientMiddleware, movieController.delete); 

module.exports = router;