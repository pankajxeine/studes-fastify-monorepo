"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GuardianService_1 = require("../../services/people/guardian/GuardianService");
const GuardianRoutes = async (app) => {
    const controller = new GuardianService_1.GuardianService();
    app.get('/guardian', async (request, reply) => {
        const result = await controller.listGuardian(app, request);
        return reply.send(result);
    });
    app.post('/guardian', async (request, reply) => {
        const result = await controller.createGuardian(app, request.body, request);
        return reply.send(result);
    });
    app.get('/guardian/:id', async (request, reply) => {
        const result = await controller.getGuardianById(app, request);
        return reply.send(result);
    });
    app.put('/guardian/:id', async (request, reply) => {
        const result = await controller.updateGuardian(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/guardian/:id', async (request, reply) => {
        const result = await controller.deleteGuardian(app, request);
        return reply.send(result);
    });
};
exports.default = GuardianRoutes;
