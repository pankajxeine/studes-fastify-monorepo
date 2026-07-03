"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceTicketTypesService_1 = require("../services/cpanels/service_ticket_types/ServiceTicketTypesService");
const ServiceTicketTypesRoutes = async (app) => {
    const controller = new ServiceTicketTypesService_1.ServiceTicketTypesService();
    app.get('/service_ticket_types', async (request, reply) => {
        return await reply.send(controller.listServiceTicketTypes(app, request));
    });
    app.post('/service_ticket_types', async (request, reply) => {
        return await reply.send(controller.createServiceTicketType(app, request.body, request));
    });
    app.get('/service_ticket_types/:id', async (request, reply) => {
        return await reply.send(controller.getServiceTicketTypesById(app, request));
    });
    app.put('/service_ticket_types/:id', async (request, reply) => {
        return await reply.send(controller.updateServiceTicketType(app, request.body, request));
    });
    app.delete('/service_ticket_types/:id', async (request, reply) => {
        return await reply.send(controller.deleteServiceTicketType(app, request));
    });
};
exports.default = ServiceTicketTypesRoutes;
