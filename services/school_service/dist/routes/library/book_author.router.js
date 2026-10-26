"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookAuthorService_1 = require("../../services/library/book_author/BookAuthorService");
const BookAuthorRoutes = async (app) => {
    const controller = new BookAuthorService_1.BookAuthorService();
    app.get('/book_author', async (request, reply) => {
        const result = await controller.listBookAuthor(app, request);
        return reply.send(result);
    });
    app.post('/book_author', async (request, reply) => {
        const result = await controller.createBookAuthor(app, request.body, request);
        return reply.send(result);
    });
    app.get('/book_author/:id', async (request, reply) => {
        const result = await controller.getBookAuthorById(app, request);
        return reply.send(result);
    });
    app.put('/book_author/:id', async (request, reply) => {
        const result = await controller.updateBookAuthor(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/book_author/:id', async (request, reply) => {
        const result = await controller.deleteBookAuthor(app, request);
        return reply.send(result);
    });
};
exports.default = BookAuthorRoutes;
