"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailTemplatesService_1 = require("../services/email_templates/EmailTemplatesService");
const EmailTemplatesRoutes = async (app) => {
    const controller = new EmailTemplatesService_1.EmailTemplatesService();
    app.get('/email/templates', async (request, reply) => {
        const result = await controller.listEmailTemplates(app, request);
        return reply.send(result);
    });
    app.post('/email/templates', async (request, reply) => {
        const result = await controller.createEmailTemplate(app, request.body, request);
        return reply.send(result);
    });
    app.patch('/email/templates/:templateId', async (request, reply) => {
        const result = await controller.updateEmailTemplate(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/email/templates/:templateId', async (request, reply) => {
        const result = await controller.deleteEmailTemplate(app, request);
        return reply.send(result);
    });
};
exports.default = EmailTemplatesRoutes;
