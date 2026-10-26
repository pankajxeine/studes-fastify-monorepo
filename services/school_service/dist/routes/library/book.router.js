"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookService_1 = require("../../services/library/book/BookService");
const BookRoutes = async (app) => {
    const controller = new BookService_1.BookService();
    app.get('/book', async (request, reply) => {
        const result = await controller.listBook(app, request);
        return reply.send(result);
    });
    app.post('/book', async (request, reply) => {
        const result = await controller.createBook(app, request.body, request);
        return reply.send(result);
    });
    app.get('/book/:id', async (request, reply) => {
        const result = await controller.getBookById(app, request);
        return reply.send(result);
    });
    app.put('/book/:id', async (request, reply) => {
        const result = await controller.updateBook(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/book/:id', async (request, reply) => {
        const result = await controller.deleteBook(app, request);
        return reply.send(result);
    });
};
exports.default = BookRoutes;
