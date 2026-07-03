"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerDocumentsService_1 = require("../services/cpanels/customer_documents/CustomerDocumentsService");
const CustomerDocumentsRoutes = async (app) => {
    const controller = new CustomerDocumentsService_1.CustomerDocumentsService();
    app.get('/customer_documents', async (request, reply) => {
        return await reply.send(controller.listCustomerDocuments(app, request));
    });
    app.post('/customer_documents', async (request, reply) => {
        return await reply.send(controller.createCustomerDocument(app, request.body, request));
    });
    app.get('/customer_documents/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerDocumentsById(app, request));
    });
    app.put('/customer_documents/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerDocument(app, request.body, request));
    });
    app.delete('/customer_documents/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerDocument(app, request));
    });
};
exports.default = CustomerDocumentsRoutes;
