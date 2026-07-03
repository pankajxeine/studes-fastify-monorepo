"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerDiscountsService_1 = require("../services/cpanels/customer_discounts/CustomerDiscountsService");
const CustomerDiscountsRoutes = async (app) => {
    const controller = new CustomerDiscountsService_1.CustomerDiscountsService();
    app.get('/customer_discounts', async (request, reply) => {
        return await reply.send(controller.listCustomerDiscounts(app, request));
    });
    app.post('/customer_discounts', async (request, reply) => {
        return await reply.send(controller.createCustomerDiscount(app, request.body, request));
    });
    app.get('/customer_discounts/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerDiscountsById(app, request));
    });
    app.put('/customer_discounts/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerDiscount(app, request.body, request));
    });
    app.delete('/customer_discounts/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerDiscount(app, request));
    });
};
exports.default = CustomerDiscountsRoutes;
