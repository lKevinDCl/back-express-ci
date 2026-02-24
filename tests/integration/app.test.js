const request = require('supertest');
const app = require('../../src/app');

describe('Pruebas de la API de Express', () => {
  
  test('1. GET / - Debería responder con status 200 (Ruta Pública)', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('2. GET /api/usuarios/perfil - Debería fallar con 401 si no hay token', async () => {
    const response = await request(app).get('/api/usuarios/perfil');
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe('Acceso denegado. Token inválido o ausente.');
  });

  test('3. GET /api/usuarios/perfil - Debería pasar con 200 si el token es correcto', async () => {
    const response = await request(app)
      .get('/api/usuarios/perfil')
      .set('Authorization', 'Bearer mi-token-super-secreto'); 
    
    expect(response.statusCode).toBe(200);
    expect(response.body.nombre).toBe('Usuario de Prueba');
  });

});