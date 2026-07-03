"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackagesService_1 = require("../services/cpanels/packages/PackagesService");
const PackagesRoutes = async (app) => {
    const controller = new PackagesService_1.PackagesService();
    app.get('/packages', async (request, reply) => {
        return await reply.send(controller.listPackages(app, request));
    });
    app.post('/packages', async (request, reply) => {
        return await reply.send(controller.createPackage(app, request.body, request));
    });
    app.get('/packages/:id', async (request, reply) => {
        return await reply.send(controller.getPackagesById(app, request));
    });
    app.put('/packages/:id', async (request, reply) => {
        return await reply.send(controller.updatePackage(app, request.body, request));
    });
    app.delete('/packages/:id', async (request, reply) => {
        return await reply.send(controller.deletePackage(app, request));
    });
};
exports.default = PackagesRoutes;
