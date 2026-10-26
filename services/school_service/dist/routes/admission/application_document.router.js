"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationDocumentService_1 = require("../../services/admission/application_document/ApplicationDocumentService");
const ApplicationDocumentRoutes = async (app) => {
    const controller = new ApplicationDocumentService_1.ApplicationDocumentService();
    app.get('/application_document', async (request, reply) => {
        const result = await controller.listApplicationDocument(app, request);
        return reply.send(result);
    });
    app.post('/application_document', async (request, reply) => {
        const result = await controller.createApplicationDocument(app, request.body, request);
        return reply.send(result);
    });
    app.get('/application_document/:id', async (request, reply) => {
        const result = await controller.getApplicationDocumentById(app, request);
        return reply.send(result);
    });
    app.put('/application_document/:id', async (request, reply) => {
        const result = await controller.updateApplicationDocument(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/application_document/:id', async (request, reply) => {
        const result = await controller.deleteApplicationDocument(app, request);
        return reply.send(result);
    });
};
exports.default = ApplicationDocumentRoutes;
