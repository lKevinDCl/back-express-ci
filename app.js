const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ mensaje: '¡Hola desde Express en GitLab CI!' });
});

module.exports = app;