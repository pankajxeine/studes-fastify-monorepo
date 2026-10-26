"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpenseCategoryService_1 = require("../../services/finance/expense_category/ExpenseCategoryService");
const ExpenseCategoryRoutes = async (app) => {
    const controller = new ExpenseCategoryService_1.ExpenseCategoryService();
    app.get('/expense_category', async (request, reply) => {
        const result = await controller.listExpenseCategory(app, request);
        return reply.send(result);
    });
    app.post('/expense_category', async (request, reply) => {
        const result = await controller.createExpenseCategory(app, request.body, request);
        return reply.send(result);
    });
    app.get('/expense_category/:id', async (request, reply) => {
        const result = await controller.getExpenseCategoryById(app, request);
        return reply.send(result);
    });
    app.put('/expense_category/:id', async (request, reply) => {
        const result = await controller.updateExpenseCategory(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/expense_category/:id', async (request, reply) => {
        const result = await controller.deleteExpenseCategory(app, request);
        return reply.send(result);
    });
};
exports.default = ExpenseCategoryRoutes;
