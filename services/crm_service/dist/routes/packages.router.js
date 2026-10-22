"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackagesService_1 = require("../services/cpanel/packages/PackagesService");
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
    app.get('/packages/:id', async (request, reply) => {
        const result = await controller.getPackagesById(app, request);
        return reply.send(result);
    });
    app.put('/packages/:id', async (request, reply) => {
        const result = await controller.updatePackage(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/packages/:id', async (request, reply) => {
        const result = await controller.deletePackage(app, request);
        return reply.send(result);
    });
};
exports.default = PackagesRoutes;
