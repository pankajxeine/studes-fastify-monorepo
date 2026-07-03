"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailTemplateFieldsService_1 = require("../services/cpanels/email_template_fields/EmailTemplateFieldsService");
const EmailTemplateFieldsRoutes = async (app) => {
    const controller = new EmailTemplateFieldsService_1.EmailTemplateFieldsService();
    app.get('/email_template_fields', async (request, reply) => {
        return await reply.send(controller.listEmailTemplateFields(app, request));
    });
    app.post('/email_template_fields', async (request, reply) => {
        return await reply.send(controller.createEmailTemplateField(app, request.body, request));
    });
    app.get('/email_template_fields/:id', async (request, reply) => {
        return await reply.send(controller.getEmailTemplateFieldsById(app, request));
    });
    app.put('/email_template_fields/:id', async (request, reply) => {
        return await reply.send(controller.updateEmailTemplateField(app, request.body, request));
    });
    app.delete('/email_template_fields/:id', async (request, reply) => {
        return await reply.send(controller.deleteEmailTemplateField(app, request));
    });
};
exports.default = EmailTemplateFieldsRoutes;
