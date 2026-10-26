"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookCopyService_1 = require("../../services/library/book_copy/BookCopyService");
const BookCopyRoutes = async (app) => {
    const controller = new BookCopyService_1.BookCopyService();
    app.get('/book_copy', async (request, reply) => {
        const result = await controller.listBookCopy(app, request);
        return reply.send(result);
    });
    app.post('/book_copy', async (request, reply) => {
        const result = await controller.createBookCopy(app, request.body, request);
        return reply.send(result);
    });
    app.get('/book_copy/:id', async (request, reply) => {
        const result = await controller.getBookCopyById(app, request);
        return reply.send(result);
    });
    app.put('/book_copy/:id', async (request, reply) => {
        const result = await controller.updateBookCopy(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/book_copy/:id', async (request, reply) => {
        const result = await controller.deleteBookCopy(app, request);
        return reply.send(result);
    });
};
exports.default = BookCopyRoutes;
