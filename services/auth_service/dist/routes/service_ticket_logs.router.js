"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceTicketLogsService_1 = require("../services/cpanels/service_ticket_logs/ServiceTicketLogsService");
const ServiceTicketLogsRoutes = async (app) => {
    const controller = new ServiceTicketLogsService_1.ServiceTicketLogsService();
    app.get('/service_ticket_logs', async (request, reply) => {
        return await reply.send(controller.listServiceTicketLogs(app, request));
    });
    app.post('/service_ticket_logs', async (request, reply) => {
        return await reply.send(controller.createServiceTicketLog(app, request.body, request));
    });
    app.get('/service_ticket_logs/:id', async (request, reply) => {
        return await reply.send(controller.getServiceTicketLogsById(app, request));
    });
    app.put('/service_ticket_logs/:id', async (request, reply) => {
        return await reply.send(controller.updateServiceTicketLog(app, request.body, request));
    });
    app.delete('/service_ticket_logs/:id', async (request, reply) => {
        return await reply.send(controller.deleteServiceTicketLog(app, request));
    });
};
exports.default = ServiceTicketLogsRoutes;
