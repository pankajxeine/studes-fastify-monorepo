"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerExportTemplatesService_1 = require("../services/cpanels/customer_export_templates/CustomerExportTemplatesService");
const CustomerExportTemplatesRoutes = async (app) => {
    const controller = new CustomerExportTemplatesService_1.CustomerExportTemplatesService();
    app.get('/customer_export_templates', async (request, reply) => {
        return await reply.send(controller.listCustomerExportTemplates(app, request));
    });
    app.post('/customer_export_templates', async (request, reply) => {
        return await reply.send(controller.createCustomerExportTemplate(app, request.body, request));
    });
    app.get('/customer_export_templates/:id', async (request, reply) => {
        return await reply.send(controller.getCustomerExportTemplatesById(app, request));
    });
    app.put('/customer_export_templates/:id', async (request, reply) => {
        return await reply.send(controller.updateCustomerExportTemplate(app, request.body, request));
    });
    app.delete('/customer_export_templates/:id', async (request, reply) => {
        return await reply.send(controller.deleteCustomerExportTemplate(app, request));
    });
};
exports.default = CustomerExportTemplatesRoutes;
