"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerStatusLogsService_1 = require("../services/cpanels/customer_status_logs/CustomerStatusLogsService");
const CustomerStatusLogsRoutes = async (app) => {
    const controller = new CustomerStatusLogsService_1.CustomerStatusLogsService();
    app.get('/customer_status_logs', async (request, reply) => {
        return await reply.send(controller.listCustomerStatusLogs(app, request));
    });
    app.post('/customer_status_logs', async (request, reply) => {
        return await reply.send(controller.createCustomerStatusLog(app, request.body, request));
    });
    app.get('/customer_status_logs/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerStatusLogsById(app, request));
    });
    app.put('/customer_status_logs/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerStatusLog(app, request.body, request));
    });
    app.delete('/customer_status_logs/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerStatusLog(app, request));
    });
};
exports.default = CustomerStatusLogsRoutes;
