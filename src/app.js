const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware para que Express entienda JSON
app.use(express.json());

// Ruta pública de prueba
app.get('/', (req, res) => {
  res.status(200).json({ mensaje: 'API funcionando correctamente' });
});

// Rutas de usuarios (prefijo /api/usuarios)
app.use('/api/usuariosv2', userRoutes);

module.exports = app;