"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WalletTransactionService_1 = require("../../services/canteen/wallet_transaction/WalletTransactionService");
const WalletTransactionRoutes = async (app) => {
    const controller = new WalletTransactionService_1.WalletTransactionService();
    app.get('/wallet_transaction', async (request, reply) => {
        const result = await controller.listWalletTransaction(app, request);
        return reply.send(result);
    });
    app.post('/wallet_transaction', async (request, reply) => {
        const result = await controller.createWalletTransaction(app, request.body, request);
        return reply.send(result);
    });
    app.get('/wallet_transaction/:id', async (request, reply) => {
        const result = await controller.getWalletTransactionById(app, request);
        return reply.send(result);
    });
    app.put('/wallet_transaction/:id', async (request, reply) => {
        const result = await controller.updateWalletTransaction(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/wallet_transaction/:id', async (request, reply) => {
        const result = await controller.deleteWalletTransaction(app, request);
        return reply.send(result);
    });
};
exports.default = WalletTransactionRoutes;
