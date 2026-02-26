exports.obtenerPerfil = (req, res) => {
  // Simulamos que fuimos a una base de datos a traer esta información
  res.status(200).json({ 
    id: 1, 
    nombre: 'Usuario de Prueba', 
    rol: 'Administrador' 
  });
};