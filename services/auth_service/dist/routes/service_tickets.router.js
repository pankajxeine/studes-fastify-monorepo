"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceTicketsService_1 = require("../services/cpanels/service_tickets/ServiceTicketsService");
const ServiceTicketsRoutes = async (app) => {
    const controller = new ServiceTicketsService_1.ServiceTicketsService();
    app.get('/service_tickets', async (request, reply) => {
        return await reply.send(controller.listServiceTickets(app, request));
    });
    app.post('/service_tickets', async (request, reply) => {
        return await reply.send(controller.createServiceTicket(app, request.body, request));
    });
    app.get('/service_tickets/:id', async (request, reply) => {
        return await reply.send(controller.getServiceTicketsById(app, request));
    });
    app.put('/service_tickets/:id', async (request, reply) => {
        return await reply.send(controller.updateServiceTicket(app, request.body, request));
    });
    app.delete('/service_tickets/:id', async (request, reply) => {
        return await reply.send(controller.deleteServiceTicket(app, request));
    });
};
exports.default = ServiceTicketsRoutes;
