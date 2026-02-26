module.exports = (req, res, next) => {
  // Buscamos el token en los headers de la petición
  const token = req.header('Authorization');
  
  // Si el token es correcto, lo dejamos pasar a la ruta
  if (token === 'Bearer mi-token-super-secreto') {
    next();
  } else {
    // Si no hay token o es incorrecto, devolvemos un error 401 (No autorizado)
    res.status(401).json({ error: 'Acceso denegado. Token inválido o ausente.' });
  }
};