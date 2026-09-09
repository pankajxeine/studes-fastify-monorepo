"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LibraryService_1 = require("../services/LibraryService");
const LibraryRoutes = async (app) => {
    const controller = new LibraryService_1.LibraryService();
    app.get('/library/books', async (request, reply) => {
        return await controller.listLibraryBooks(app, request);
    });
    app.post('/library/books', async (request, reply) => {
        return await controller.createLibraryBook(app, request.body, request);
    });
    app.post('/library/loans', async (request, reply) => {
        return await controller.createLibraryLoan(app, request.body, request);
    });
    app.post('/library/returns', async (request, reply) => {
        return await controller.returnLibraryBook(app, request.body, request);
    });
};
exports.default = LibraryRoutes;
