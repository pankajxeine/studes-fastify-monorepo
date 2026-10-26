"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdmissionCycleSeatService_1 = require("../../services/admission/admission_cycle_seat/AdmissionCycleSeatService");
const AdmissionCycleSeatRoutes = async (app) => {
    const controller = new AdmissionCycleSeatService_1.AdmissionCycleSeatService();
    app.get('/admission_cycle_seat', async (request, reply) => {
        const result = await controller.listAdmissionCycleSeat(app, request);
        return reply.send(result);
    });
    app.post('/admission_cycle_seat', async (request, reply) => {
        const result = await controller.createAdmissionCycleSeat(app, request.body, request);
        return reply.send(result);
    });
    app.get('/admission_cycle_seat/:id', async (request, reply) => {
        const result = await controller.getAdmissionCycleSeatById(app, request);
        return reply.send(result);
    });
    app.put('/admission_cycle_seat/:id', async (request, reply) => {
        const result = await controller.updateAdmissionCycleSeat(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/admission_cycle_seat/:id', async (request, reply) => {
        const result = await controller.deleteAdmissionCycleSeat(app, request);
        return reply.send(result);
    });
};
exports.default = AdmissionCycleSeatRoutes;
