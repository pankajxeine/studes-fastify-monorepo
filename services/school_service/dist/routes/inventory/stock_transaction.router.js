"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StockTransactionService_1 = require("../../services/inventory/stock_transaction/StockTransactionService");
const StockTransactionRoutes = async (app) => {
    const controller = new StockTransactionService_1.StockTransactionService();
    app.get('/stock_transaction', async (request, reply) => {
        const result = await controller.listStockTransaction(app, request);
        return reply.send(result);
    });
    app.post('/stock_transaction', async (request, reply) => {
        const result = await controller.createStockTransaction(app, request.body, request);
        return reply.send(result);
    });
    app.get('/stock_transaction/:id', async (request, reply) => {
        const result = await controller.getStockTransactionById(app, request);
        return reply.send(result);
    });
    app.put('/stock_transaction/:id', async (request, reply) => {
        const result = await controller.updateStockTransaction(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/stock_transaction/:id', async (request, reply) => {
        const result = await controller.deleteStockTransaction(app, request);
        return reply.send(result);
    });
};
exports.default = StockTransactionRoutes;
