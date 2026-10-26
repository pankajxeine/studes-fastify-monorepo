"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncidentPartyService_1 = require("../../services/discipline/incident_party/IncidentPartyService");
const IncidentPartyRoutes = async (app) => {
    const controller = new IncidentPartyService_1.IncidentPartyService();
    app.get('/incident_party', async (request, reply) => {
        const result = await controller.listIncidentParty(app, request);
        return reply.send(result);
    });
    app.post('/incident_party', async (request, reply) => {
        const result = await controller.createIncidentParty(app, request.body, request);
        return reply.send(result);
    });
    app.get('/incident_party/:id', async (request, reply) => {
        const result = await controller.getIncidentPartyById(app, request);
        return reply.send(result);
    });
    app.put('/incident_party/:id', async (request, reply) => {
        const result = await controller.updateIncidentParty(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/incident_party/:id', async (request, reply) => {
        const result = await controller.deleteIncidentParty(app, request);
        return reply.send(result);
    });
};
exports.default = IncidentPartyRoutes;
