"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstitutesService_1 = require("../services/cpanels/institutes/InstitutesService");
const InstitutesRoutes = async (app) => {
    const controller = new InstitutesService_1.InstitutesService();
    app.get('/institutes', async (request, reply) => {
        return await reply.send(controller.listInstitutes(app, request));
    });
    app.post('/institutes', async (request, reply) => {
        return await reply.send(controller.createInstitute(app, request.body, request));
    });
    app.get('/institutes/:id', async (request, reply) => {
        return await reply.send(controller.getInstitutesById(app, request));
    });
    app.put('/institutes/:id', async (request, reply) => {
        return await reply.send(controller.updateInstitute(app, request.body, request));
    });
    app.delete('/institutes/:id', async (request, reply) => {
        return await reply.send(controller.deleteInstitute(app, request));
    });
};
exports.default = InstitutesRoutes;
