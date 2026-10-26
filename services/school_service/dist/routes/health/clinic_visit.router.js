"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClinicVisitService_1 = require("../../services/health/clinic_visit/ClinicVisitService");
const ClinicVisitRoutes = async (app) => {
    const controller = new ClinicVisitService_1.ClinicVisitService();
    app.get('/clinic_visit', async (request, reply) => {
        const result = await controller.listClinicVisit(app, request);
        return reply.send(result);
    });
    app.post('/clinic_visit', async (request, reply) => {
        const result = await controller.createClinicVisit(app, request.body, request);
        return reply.send(result);
    });
    app.get('/clinic_visit/:id', async (request, reply) => {
        const result = await controller.getClinicVisitById(app, request);
        return reply.send(result);
    });
    app.put('/clinic_visit/:id', async (request, reply) => {
        const result = await controller.updateClinicVisit(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/clinic_visit/:id', async (request, reply) => {
        const result = await controller.deleteClinicVisit(app, request);
        return reply.send(result);
    });
};
exports.default = ClinicVisitRoutes;
