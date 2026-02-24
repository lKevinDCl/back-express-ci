const request = require('supertest');
const app = require('./app');

describe('Pruebas de la API', () => {
  test('Debería responder con un status 200 en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe('¡Hola desde Express en GitLab CI!');
  });
});