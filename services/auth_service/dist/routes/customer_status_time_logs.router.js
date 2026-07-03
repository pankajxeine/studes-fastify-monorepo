"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerStatusTimeLogsService_1 = require("../services/cpanels/customer_status_time_logs/CustomerStatusTimeLogsService");
const CustomerStatusTimeLogsRoutes = async (app) => {
    const controller = new CustomerStatusTimeLogsService_1.CustomerStatusTimeLogsService();
    app.get('/customer_status_time_logs', async (request, reply) => {
        return await reply.send(controller.listCustomerStatusTimeLogs(app, request));
    });
    app.post('/customer_status_time_logs', async (request, reply) => {
        return await reply.send(controller.createCustomerStatusTimeLog(app, request.body, request));
    });
    app.get('/customer_status_time_logs/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerStatusTimeLogsById(app, request));
    });
    app.put('/customer_status_time_logs/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerStatusTimeLog(app, request.body, request));
    });
    app.delete('/customer_status_time_logs/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerStatusTimeLog(app, request));
    });
};
exports.default = CustomerStatusTimeLogsRoutes;
