"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InvoiceService_1 = require("../../services/finance/invoice/InvoiceService");
const InvoiceRoutes = async (app) => {
    const controller = new InvoiceService_1.InvoiceService();
    app.get('/invoice', async (request, reply) => {
        const result = await controller.listInvoice(app, request);
        return reply.send(result);
    });
    app.post('/invoice', async (request, reply) => {
        const result = await controller.createInvoice(app, request.body, request);
        return reply.send(result);
    });
    app.get('/invoice/:id', async (request, reply) => {
        const result = await controller.getInvoiceById(app, request);
        return reply.send(result);
    });
    app.put('/invoice/:id', async (request, reply) => {
        const result = await controller.updateInvoice(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/invoice/:id', async (request, reply) => {
        const result = await controller.deleteInvoice(app, request);
        return reply.send(result);
    });
};
exports.default = InvoiceRoutes;
