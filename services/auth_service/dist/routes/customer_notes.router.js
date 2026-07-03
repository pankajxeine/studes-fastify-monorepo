"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerNotesService_1 = require("../services/cpanels/customer_notes/CustomerNotesService");
const CustomerNotesRoutes = async (app) => {
    const controller = new CustomerNotesService_1.CustomerNotesService();
    app.get('/customer_notes', async (request, reply) => {
        return await reply.send(controller.listCustomerNotes(app, request));
    });
    app.post('/customer_notes', async (request, reply) => {
        return await reply.send(controller.createCustomerNote(app, request.body, request));
    });
    app.get('/customer_notes/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerNotesById(app, request));
    });
    app.put('/customer_notes/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerNote(app, request.body, request));
    });
    app.delete('/customer_notes/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerNote(app, request));
    });
};
exports.default = CustomerNotesRoutes;
