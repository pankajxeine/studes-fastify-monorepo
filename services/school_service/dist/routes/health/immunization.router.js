"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImmunizationService_1 = require("../../services/health/immunization/ImmunizationService");
const ImmunizationRoutes = async (app) => {
    const controller = new ImmunizationService_1.ImmunizationService();
    app.get('/immunization', async (request, reply) => {
        const result = await controller.listImmunization(app, request);
        return reply.send(result);
    });
    app.post('/immunization', async (request, reply) => {
        const result = await controller.createImmunization(app, request.body, request);
        return reply.send(result);
    });
    app.get('/immunization/:id', async (request, reply) => {
        const result = await controller.getImmunizationById(app, request);
        return reply.send(result);
    });
    app.put('/immunization/:id', async (request, reply) => {
        const result = await controller.updateImmunization(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/immunization/:id', async (request, reply) => {
        const result = await controller.deleteImmunization(app, request);
        return reply.send(result);
    });
};
exports.default = ImmunizationRoutes;
