const request = require('supertest');
const app = require('../src/app');


describe('Rutas de /api/books', () => {
    


    describe('GET /api/books', () => {
        it('debe devolver una lista de libros', async () => {
            const response = await request(app).get('/api/books');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('POST /api/books', () => {
        it('debe crear un nuevo libro y devolver 201', async () => {
            const newBook = { title: 'Nuevo Libro', author: 'Autor', publicationYear: 2000 };
            const response = await request(app)
                .post('/api/books')
                .send(newBook);
                
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject(newBook);
        });
    });

    describe('PUT /api/books/:id', () => {
        it('debe actualizar un libro existente y devolver 204', async () => {
            const updatedBook = { title: 'Libro Actualizado' };
            const response = await request(app)
                .put('/api/books/1')
                .send(updatedBook);
                
            expect(response.status).toBe(204);
          
        });
    });

    describe('DELETE /api/books/:id', () => {
        it('debe eliminar un libro y devolver 204', async () => {
            const response = await request(app).delete('/api/books/1');
            expect(response.status).toBe(204);
        });
    });
});
