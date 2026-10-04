"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackagesService_1 = require("../services/packages/PackagesService");
const PackagesRoutes = async (app) => {
    const controller = new PackagesService_1.PackagesService();
    app.get('/packages', async (request, reply) => {
        const result = await controller.listPackages(app, request);
        return reply.send(result);
    });
    app.post('/packages', async (request, reply) => {
        const result = await controller.createPackage(app, request.body, request);
        return reply.send(result);
    });
    app.get('/packages/:packageId', async (request, reply) => {
        const result = await controller.getPackage(app, request);
        return reply.send(result);
    });
    app.patch('/packages/:packageId', async (request, reply) => {
        const result = await controller.updatePackage(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/packages/:packageId', async (request, reply) => {
        const result = await controller.deletePackage(app, request);
        return reply.send(result);
    });
};
exports.default = PackagesRoutes;
