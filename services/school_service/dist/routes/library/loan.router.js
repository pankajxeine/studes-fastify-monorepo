"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoanService_1 = require("../../services/library/loan/LoanService");
const LoanRoutes = async (app) => {
    const controller = new LoanService_1.LoanService();
    app.get('/loan', async (request, reply) => {
        const result = await controller.listLoan(app, request);
        return reply.send(result);
    });
    app.post('/loan', async (request, reply) => {
        const result = await controller.createLoan(app, request.body, request);
        return reply.send(result);
    });
    app.get('/loan/:id', async (request, reply) => {
        const result = await controller.getLoanById(app, request);
        return reply.send(result);
    });
    app.put('/loan/:id', async (request, reply) => {
        const result = await controller.updateLoan(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/loan/:id', async (request, reply) => {
        const result = await controller.deleteLoan(app, request);
        return reply.send(result);
    });
};
exports.default = LoanRoutes;
