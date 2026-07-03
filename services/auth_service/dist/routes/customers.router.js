"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomersService_1 = require("../services/cpanels/customers/CustomersService");
const CustomersRoutes = async (app) => {
    const controller = new CustomersService_1.CustomersService();
    app.get('/customers', async (request, reply) => {
        return await reply.send(controller.listCustomers(app, request));
    });
    app.post('/customers', async (request, reply) => {
        return await reply.send(controller.createCustomer(app, request.body, request));
    });
    app.get('/customers/:id', async (request, reply) => {
        return await reply.send(controller.getCustomersById(app, request));
    });
    app.put('/customers/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomer(app, request.body, request));
    });
    app.delete('/customers/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomer(app, request));
    });
};
exports.default = CustomersRoutes;
