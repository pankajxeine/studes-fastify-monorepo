"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpenseService_1 = require("../../services/finance/expense/ExpenseService");
const ExpenseRoutes = async (app) => {
    const controller = new ExpenseService_1.ExpenseService();
    app.get('/expense', async (request, reply) => {
        const result = await controller.listExpense(app, request);
        return reply.send(result);
    });
    app.post('/expense', async (request, reply) => {
        const result = await controller.createExpense(app, request.body, request);
        return reply.send(result);
    });
    app.get('/expense/:id', async (request, reply) => {
        const result = await controller.getExpenseById(app, request);
        return reply.send(result);
    });
    app.put('/expense/:id', async (request, reply) => {
        const result = await controller.updateExpense(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/expense/:id', async (request, reply) => {
        const result = await controller.deleteExpense(app, request);
        return reply.send(result);
    });
};
exports.default = ExpenseRoutes;
