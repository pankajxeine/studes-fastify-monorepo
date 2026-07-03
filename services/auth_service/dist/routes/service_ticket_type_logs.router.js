"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceTicketTypeLogsService_1 = require("../services/cpanels/service_ticket_type_logs/ServiceTicketTypeLogsService");
const ServiceTicketTypeLogsRoutes = async (app) => {
    const controller = new ServiceTicketTypeLogsService_1.ServiceTicketTypeLogsService();
    app.get('/service_ticket_type_logs', async (request, reply) => {
        return await reply.send(controller.listServiceTicketTypeLogs(app, request));
    });
    app.post('/service_ticket_type_logs', async (request, reply) => {
        return await reply.send(controller.createServiceTicketTypeLog(app, request.body, request));
    });
    app.get('/service_ticket_type_logs/:id', async (request, reply) => {
        return await reply.send(controller.getServiceTicketTypeLogsById(app, request));
    });
    app.put('/service_ticket_type_logs/:id', async (request, reply) => {
        return await reply.send(controller.updateServiceTicketTypeLog(app, request.body, request));
    });
    app.delete('/service_ticket_type_logs/:id', async (request, reply) => {
        return await reply.send(controller.deleteServiceTicketTypeLog(app, request));
    });
};
exports.default = ServiceTicketTypeLogsRoutes;
