"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerExportTemplatesFieldsService_1 = require("../services/cpanels/customer_export_templates_fields/CustomerExportTemplatesFieldsService");
const CustomerExportTemplatesFieldsRoutes = async (app) => {
    const controller = new CustomerExportTemplatesFieldsService_1.CustomerExportTemplatesFieldsService();
    app.get('/customer_export_templates_fields', async (request, reply) => {
        return await reply.send(controller.listCustomerExportTemplatesFields(app, request));
    });
    app.post('/customer_export_templates_fields', async (request, reply) => {
        return await reply.send(controller.createCustomerExportTemplatesField(app, request.body, request));
    });
    app.get('/customer_export_templates_fields/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerExportTemplatesFieldsById(app, request));
    });
    app.put('/customer_export_templates_fields/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerExportTemplatesField(app, request.body, request));
    });
    app.delete('/customer_export_templates_fields/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerExportTemplatesField(app, request));
    });
};
exports.default = CustomerExportTemplatesFieldsRoutes;
