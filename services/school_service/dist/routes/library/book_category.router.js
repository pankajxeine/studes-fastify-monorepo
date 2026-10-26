"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookCategoryService_1 = require("../../services/library/book_category/BookCategoryService");
const BookCategoryRoutes = async (app) => {
    const controller = new BookCategoryService_1.BookCategoryService();
    app.get('/book_category', async (request, reply) => {
        const result = await controller.listBookCategory(app, request);
        return reply.send(result);
    });
    app.post('/book_category', async (request, reply) => {
        const result = await controller.createBookCategory(app, request.body, request);
        return reply.send(result);
    });
    app.get('/book_category/:id', async (request, reply) => {
        const result = await controller.getBookCategoryById(app, request);
        return reply.send(result);
    });
    app.put('/book_category/:id', async (request, reply) => {
        const result = await controller.updateBookCategory(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/book_category/:id', async (request, reply) => {
        const result = await controller.deleteBookCategory(app, request);
        return reply.send(result);
    });
};
exports.default = BookCategoryRoutes;
