const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");
const multer = require('multer');
const path = require("path");
const { body } = require("express-validator");

const clientMiddleware = require('../middlewares/clientMiddleware');
const validateCreationMiddleware = require('../middlewares/validateCreationMiddleware');


router.get('/', movieController.index);
router.get('/detalle/:id', movieController.detail);
router.get('/create', movieController.create);
router.post('/create', validateCreationMiddleware, movieController.store); 
router.get('/edit/:id', clientMiddleware, movieController.edit); 
router.post('/edit/:id', movieController.update); 
router.post('/delete/:id', clientMiddleware, movieController.delete); 

module.exports = router;