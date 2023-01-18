const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");
const multer = require('multer');
const path = require("path");

// MIDDLEWARES

// const authMiddleware = require('../middlewares/authMiddleware');
// const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
// const clientMiddleware = require('../middlewares/clientMiddleware');

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


/* Rutas dentro de /productos/... 
router.get('/product-options', movieController.options);

 //hay dos rutas de crear


*/
router.get('/listar', movieController.list);
// router.get('/buscar', movieController.buscador)

// router.get('/detalle/:id', movieController.detail);

// //Rutas que necesitas estar logeado para ver
// router.get('/crear',authMiddleware, clientMiddleware, movieController.crear);
// router.post('/crear',upload.single("productImage"), movieController.store);
// router.get('/editar/:id',authMiddleware,clientMiddleware,  movieController.edit);
// router.put('/editar/:id',upload.single("productImage"),movieController.update);

// router.delete('/borrar/:id',userLoggedMiddleware,clientMiddleware, movieController.destroy);


// router.get('/asc', movieController.asc);
// router.get('/dsc', movieController.dsc);

// //rutas por categoría
// router.get('/videojuegos', movieController.videojuegos);
// router.get('/airelibre', movieController.airelibre);
// router.get('/demesa', movieController.demesa);
// router.get('/juguetes', movieController.juguetes);
// //rutas por precio menr a....
// router.get('/menos2000', movieController.menos2000);
// router.get('/menos4000', movieController.menos4000);
// router.get('/menos6000', movieController.menos6000);

module.exports = router;