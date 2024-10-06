const request = require('supertest');
const app = require('../src/app');

describe('POST /createSession', () => {
  it('should respond with a JSON object containing the session ID', async () => {
    const response = await request(app)
      .post('/createSession')
      .send({
        
        amount: 1000, 
        quantity: 2
      });

    expect(response.statusCode).toBe(200); 
    expect(response.body).toHaveProperty('id');
    expect(typeof response.body.id).toBe('string'); 
  
  });
});
