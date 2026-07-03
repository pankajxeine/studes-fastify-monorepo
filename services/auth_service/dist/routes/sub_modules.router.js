"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubModulesService_1 = require("../services/cpanels/sub_modules/SubModulesService");
const SubModulesRoutes = async (app) => {
    const controller = new SubModulesService_1.SubModulesService();
    app.get('/sub_modules', async (request, reply) => {
        return await reply.send(controller.listSubModules(app, request));
    });
    app.post('/sub_modules', async (request, reply) => {
        return await reply.send(controller.createSubModule(app, request.body, request));
    });
    app.get('/sub_modules/:id', async (request, reply) => {
        return await reply.send(controller.getSubModulesById(app, request));
    });
    app.put('/sub_modules/:id', async (request, reply) => {
        return await reply.send(controller.updateSubModule(app, request.body, request));
    });
    app.delete('/sub_modules/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubModule(app, request));
    });
};
exports.default = SubModulesRoutes;
