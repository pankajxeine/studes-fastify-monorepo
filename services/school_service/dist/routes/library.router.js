"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LibraryService_1 = require("../services/library/LibraryService");
const LibraryRoutes = async (app) => {
    const controller = new LibraryService_1.LibraryService();
    app.get('/library/books', async (request, reply) => {
        const result = await controller.listLibraryBooks(app, request);
        return reply.send(result);
    });
    app.post('/library/books', async (request, reply) => {
        const result = await controller.createLibraryBook(app, request.body, request);
        return reply.send(result);
    });
    app.post('/library/loans', async (request, reply) => {
        const result = await controller.createLibraryLoan(app, request.body, request);
        return reply.send(result);
    });
    app.post('/library/returns', async (request, reply) => {
        const result = await controller.returnLibraryBook(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = LibraryRoutes;
