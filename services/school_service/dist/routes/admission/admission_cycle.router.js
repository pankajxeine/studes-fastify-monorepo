"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdmissionCycleService_1 = require("../../services/admission/admission_cycle/AdmissionCycleService");
const AdmissionCycleRoutes = async (app) => {
    const controller = new AdmissionCycleService_1.AdmissionCycleService();
    app.get('/admission_cycle', async (request, reply) => {
        const result = await controller.listAdmissionCycle(app, request);
        return reply.send(result);
    });
    app.post('/admission_cycle', async (request, reply) => {
        const result = await controller.createAdmissionCycle(app, request.body, request);
        return reply.send(result);
    });
    app.get('/admission_cycle/:id', async (request, reply) => {
        const result = await controller.getAdmissionCycleById(app, request);
        return reply.send(result);
    });
    app.put('/admission_cycle/:id', async (request, reply) => {
        const result = await controller.updateAdmissionCycle(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/admission_cycle/:id', async (request, reply) => {
        const result = await controller.deleteAdmissionCycle(app, request);
        return reply.send(result);
    });
};
exports.default = AdmissionCycleRoutes;
