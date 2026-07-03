"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubPackagesService_1 = require("../services/cpanels/sub_packages/SubPackagesService");
const SubPackagesRoutes = async (app) => {
    const controller = new SubPackagesService_1.SubPackagesService();
    app.get('/sub_packages', async (request, reply) => {
        return await reply.send(controller.listSubPackages(app, request));
    });
    app.post('/sub_packages', async (request, reply) => {
        return await reply.send(controller.createSubPackage(app, request.body, request));
    });
    app.get('/sub_packages/:id', async (request, reply) => {
        return await reply.send(controller.getSubPackagesById(app, request));
    });
    app.put('/sub_packages/:id', async (request, reply) => {
        return await reply.send(controller.updateSubPackage(app, request.body, request));
    });
    app.delete('/sub_packages/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubPackage(app, request));
    });
};
exports.default = SubPackagesRoutes;
