"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MedicalProfileService_1 = require("../../services/health/medical_profile/MedicalProfileService");
const MedicalProfileRoutes = async (app) => {
    const controller = new MedicalProfileService_1.MedicalProfileService();
    app.get('/medical_profile', async (request, reply) => {
        const result = await controller.listMedicalProfile(app, request);
        return reply.send(result);
    });
    app.post('/medical_profile', async (request, reply) => {
        const result = await controller.createMedicalProfile(app, request.body, request);
        return reply.send(result);
    });
    app.get('/medical_profile/:id', async (request, reply) => {
        const result = await controller.getMedicalProfileById(app, request);
        return reply.send(result);
    });
    app.put('/medical_profile/:id', async (request, reply) => {
        const result = await controller.updateMedicalProfile(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/medical_profile/:id', async (request, reply) => {
        const result = await controller.deleteMedicalProfile(app, request);
        return reply.send(result);
    });
};
exports.default = MedicalProfileRoutes;
