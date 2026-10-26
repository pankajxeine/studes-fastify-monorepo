"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WatchlistService_1 = require("../../services/visitor/watchlist/WatchlistService");
const WatchlistRoutes = async (app) => {
    const controller = new WatchlistService_1.WatchlistService();
    app.get('/watchlist', async (request, reply) => {
        const result = await controller.listWatchlist(app, request);
        return reply.send(result);
    });
    app.post('/watchlist', async (request, reply) => {
        const result = await controller.createWatchlist(app, request.body, request);
        return reply.send(result);
    });
    app.get('/watchlist/:id', async (request, reply) => {
        const result = await controller.getWatchlistById(app, request);
        return reply.send(result);
    });
    app.put('/watchlist/:id', async (request, reply) => {
        const result = await controller.updateWatchlist(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/watchlist/:id', async (request, reply) => {
        const result = await controller.deleteWatchlist(app, request);
        return reply.send(result);
    });
};
exports.default = WatchlistRoutes;
