"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BillingService_1 = require("../services/billing/BillingService");
const BillingRoutes = async (app) => {
    const controller = new BillingService_1.BillingService();
    app.get('/billing/invoices', async (request, reply) => {
        const result = await controller.listInvoices(app, request);
        return reply.send(result);
    });
    app.post('/billing/invoices', async (request, reply) => {
        const result = await controller.createInvoice(app, request.body, request);
        return reply.send(result);
    });
    app.get('/billing/invoices/:invoiceId', async (request, reply) => {
        const result = await controller.getInvoice(app, request);
        return reply.send(result);
    });
    app.post('/billing/payments', async (request, reply) => {
        const result = await controller.createPayment(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = BillingRoutes;
