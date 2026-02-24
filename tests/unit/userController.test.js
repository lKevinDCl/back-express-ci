const userController = require('../../src/controllers/userController');

describe('Pruebas Unitarias - userController', () => {
  
  test('obtenerPerfil debería devolver el status 200 y el perfil del usuario', () => {
    // Preparamos los datos falsos (Mocks)
    const req = {}; 
    
    // Simulamos el 'res'. Necesitamos mockear status() y json()
    const res = {
      status: jest.fn().mockReturnThis(), // mockReturnThis permite encadenar res.status().json()
      json: jest.fn()
    };

    // Ejecutamos el controlador directamente
    userController.obtenerPerfil(req, res);

    // Verificamos los resultados (Expect)
    expect(res.status).toHaveBeenCalledWith(200);
    
    expect(res.json).toHaveBeenCalledWith({
      id: 1, 
      nombre: 'Usuario de Prueba', 
      rol: 'Administrador' 
    });
  });

});