"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WalletService_1 = require("../../services/canteen/wallet/WalletService");
const WalletRoutes = async (app) => {
    const controller = new WalletService_1.WalletService();
    app.get('/wallet', async (request, reply) => {
        const result = await controller.listWallet(app, request);
        return reply.send(result);
    });
    app.post('/wallet', async (request, reply) => {
        const result = await controller.createWallet(app, request.body, request);
        return reply.send(result);
    });
    app.get('/wallet/:id', async (request, reply) => {
        const result = await controller.getWalletById(app, request);
        return reply.send(result);
    });
    app.put('/wallet/:id', async (request, reply) => {
        const result = await controller.updateWallet(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/wallet/:id', async (request, reply) => {
        const result = await controller.deleteWallet(app, request);
        return reply.send(result);
    });
};
exports.default = WalletRoutes;
