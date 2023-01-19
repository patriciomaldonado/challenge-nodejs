const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");
const multer = require('multer');
const path = require("path");


const validateCreationMiddleware = require('../middlewares/validateCreationMiddleware');

//Definimos constante Storage donde decime donde y como se van a guardar los archivos que subimos

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/products-img'))
    },
    filename: function (req, file, cb) {
      const newFilename = file.fieldname + Date.now() + '-' + path.extname(file.originalname);
      cb(null, newFilename)
    }
  })
  
  const upload = multer({ storage: storage }); // Defino la variable upload que despues le voy aplicar el .single dentro de la ruta POST


router.get('/detalle/:id', movieController.detail);
router.get('/', movieController.index);
router.get('/create', movieController.create);
router.post('/create', validateCreationMiddleware, movieController.store); 

module.exports = router;