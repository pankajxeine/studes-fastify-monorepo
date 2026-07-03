"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailTemplateModulesService_1 = require("../services/cpanels/email_template_modules/EmailTemplateModulesService");
const EmailTemplateModulesRoutes = async (app) => {
    const controller = new EmailTemplateModulesService_1.EmailTemplateModulesService();
    app.get('/email_template_modules', async (request, reply) => {
        return await reply.send(controller.listEmailTemplateModules(app, request));
    });
    app.post('/email_template_modules', async (request, reply) => {
        return await reply.send(controller.createEmailTemplateModule(app, request.body, request));
    });
    app.get('/email_template_modules/:id', async (request, reply) => {
        return await reply.send(controller.getEmailTemplateModulesById(app, request));
    });
    app.put('/email_template_modules/:id', async (request, reply) => {
        return await reply.send(controller.updateEmailTemplateModule(app, request.body, request));
    });
    app.delete('/email_template_modules/:id', async (request, reply) => {
        return await reply.send(controller.deleteEmailTemplateModule(app, request));
    });
};
exports.default = EmailTemplateModulesRoutes;
