"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceTicketUserContentsService_1 = require("../services/cpanels/service_ticket_user_contents/ServiceTicketUserContentsService");
const ServiceTicketUserContentsRoutes = async (app) => {
    const controller = new ServiceTicketUserContentsService_1.ServiceTicketUserContentsService();
    app.get('/service_ticket_user_contents', async (request, reply) => {
        return await reply.send(controller.listServiceTicketUserContents(app, request));
    });
    app.post('/service_ticket_user_contents', async (request, reply) => {
        return await reply.send(controller.createServiceTicketUserContent(app, request.body, request));
    });
    app.get('/service_ticket_user_contents/:id', async (request, reply) => {
        return await reply.send(controller.getServiceTicketUserContentsById(app, request));
    });
    app.put('/service_ticket_user_contents/:id', async (request, reply) => {
        return await reply.send(controller.updateServiceTicketUserContent(app, request.body, request));
    });
    app.delete('/service_ticket_user_contents/:id', async (request, reply) => {
        return await reply.send(controller.deleteServiceTicketUserContent(app, request));
    });
};
exports.default = ServiceTicketUserContentsRoutes;
