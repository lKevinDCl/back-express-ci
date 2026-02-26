const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

// Ruta protegida: Primero pasa por 'auth', si pasa, ejecuta 'obtenerPerfil'
router.get('/perfil', auth, userController.obtenerPerfil);

module.exports = router;