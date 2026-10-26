"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmergencyContactService_1 = require("../../services/people/emergency_contact/EmergencyContactService");
const EmergencyContactRoutes = async (app) => {
    const controller = new EmergencyContactService_1.EmergencyContactService();
    app.get('/emergency_contact', async (request, reply) => {
        const result = await controller.listEmergencyContact(app, request);
        return reply.send(result);
    });
    app.post('/emergency_contact', async (request, reply) => {
        const result = await controller.createEmergencyContact(app, request.body, request);
        return reply.send(result);
    });
    app.get('/emergency_contact/:id', async (request, reply) => {
        const result = await controller.getEmergencyContactById(app, request);
        return reply.send(result);
    });
    app.put('/emergency_contact/:id', async (request, reply) => {
        const result = await controller.updateEmergencyContact(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/emergency_contact/:id', async (request, reply) => {
        const result = await controller.deleteEmergencyContact(app, request);
        return reply.send(result);
    });
};
exports.default = EmergencyContactRoutes;
