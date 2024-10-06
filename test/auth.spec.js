const app = require('../src/app')
const request = require('supertest')


describe('Authentication API', () => {
    describe('POST /api/auth/login', () => {
      it('should respond with a 200 status code and return a token', async () => {
        const userCredentials = {
          email: 'newuser@gmail.com', 
          password: 'newpassword',
        };
  
        const response = await request(app)
          .post('/api/auth/login')
          .send(userCredentials);
  
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token'); 
        expect(typeof response.body.token).toBe('string'); 
      });
    });
  
    describe('POST /api/auth/register', () => {
      it('should respond with a 201 status code and return a user object', async () => {
        const newUser = {
          name: 'newuser', 
          password: 'newpassword', 
          email: 'new@gmail.com'
        };
  
        const response = await request(app)
          .post('/api/auth/register')
          .send(newUser);
  
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('name', newUser.name); 
        expect(response.body).toHaveProperty('userId'); 
        expect(typeof response.body.userId).toBe('number'); 
      });
    });
  });
  