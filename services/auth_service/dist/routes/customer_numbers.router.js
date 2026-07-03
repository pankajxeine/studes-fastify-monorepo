"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerNumbersService_1 = require("../services/cpanels/customer_numbers/CustomerNumbersService");
const CustomerNumbersRoutes = async (app) => {
    const controller = new CustomerNumbersService_1.CustomerNumbersService();
    app.get('/customer_numbers', async (request, reply) => {
        return await reply.send(controller.listCustomerNumbers(app, request));
    });
    app.post('/customer_numbers', async (request, reply) => {
        return await reply.send(controller.createCustomerNumber(app, request.body, request));
    });
    app.get('/customer_numbers/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerNumbersById(app, request));
    });
    app.put('/customer_numbers/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerNumber(app, request.body, request));
    });
    app.delete('/customer_numbers/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerNumber(app, request));
    });
};
exports.default = CustomerNumbersRoutes;
