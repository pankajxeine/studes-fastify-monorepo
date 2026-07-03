"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceTicketCommentsService_1 = require("../services/cpanels/service_ticket_comments/ServiceTicketCommentsService");
const ServiceTicketCommentsRoutes = async (app) => {
    const controller = new ServiceTicketCommentsService_1.ServiceTicketCommentsService();
    app.get('/service_ticket_comments', async (request, reply) => {
        return await reply.send(controller.listServiceTicketComments(app, request));
    });
    app.post('/service_ticket_comments', async (request, reply) => {
        return await reply.send(controller.createServiceTicketComment(app, request.body, request));
    });
    app.get('/service_ticket_comments/:id', async (request, reply) => {
        return await reply.send(controller.getServiceTicketCommentsById(app, request));
    });
    app.put('/service_ticket_comments/:id', async (request, reply) => {
        return await reply.send(controller.updateServiceTicketComment(app, request.body, request));
    });
    app.delete('/service_ticket_comments/:id', async (request, reply) => {
        return await reply.send(controller.deleteServiceTicketComment(app, request));
    });
};
exports.default = ServiceTicketCommentsRoutes;
