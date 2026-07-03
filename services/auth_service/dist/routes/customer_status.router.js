"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerStatusService_1 = require("../services/cpanels/customer_status/CustomerStatusService");
const CustomerStatusRoutes = async (app) => {
    const controller = new CustomerStatusService_1.CustomerStatusService();
    app.get('/customer_status', async (request, reply) => {
        return await reply.send(controller.listCustomerStatus(app, request));
    });
    app.post('/customer_status', async (request, reply) => {
        return await reply.send(controller.createCustomerStatu(app, request.body, request));
    });
    app.get('/customer_status/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerStatusById(app, request));
    });
    app.put('/customer_status/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerStatu(app, request.body, request));
    });
    app.delete('/customer_status/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerStatu(app, request));
    });
};
exports.default = CustomerStatusRoutes;
