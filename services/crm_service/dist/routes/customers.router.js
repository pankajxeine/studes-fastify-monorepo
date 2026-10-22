"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomersService_1 = require("../services/cpanel/customers/CustomersService");
const CustomersRoutes = async (app) => {
    const controller = new CustomersService_1.CustomersService();
    app.get('/customers', async (request, reply) => {
        const result = await controller.listCustomers(app, request);
        return reply.send(result);
    });
    app.post('/customers', async (request, reply) => {
        const result = await controller.createCustomer(app, request.body, request);
        return reply.send(result);
    });
    app.get('/customers/:id', async (request, reply) => {
        const result = await controller.getCustomersById(app, request);
        return reply.send(result);
    });
    app.put('/customers/:id', async (request, reply) => {
        const result = await controller.updateCustomer(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/customers/:id', async (request, reply) => {
        const result = await controller.deleteCustomer(app, request);
        return reply.send(result);
    });
};
exports.default = CustomersRoutes;
