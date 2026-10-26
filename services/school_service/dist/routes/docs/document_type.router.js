"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentTypeService_1 = require("../../services/docs/document_type/DocumentTypeService");
const DocumentTypeRoutes = async (app) => {
    const controller = new DocumentTypeService_1.DocumentTypeService();
    app.get('/document_type', async (request, reply) => {
        const result = await controller.listDocumentType(app, request);
        return reply.send(result);
    });
    app.post('/document_type', async (request, reply) => {
        const result = await controller.createDocumentType(app, request.body, request);
        return reply.send(result);
    });
    app.get('/document_type/:id', async (request, reply) => {
        const result = await controller.getDocumentTypeById(app, request);
        return reply.send(result);
    });
    app.put('/document_type/:id', async (request, reply) => {
        const result = await controller.updateDocumentType(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/document_type/:id', async (request, reply) => {
        const result = await controller.deleteDocumentType(app, request);
        return reply.send(result);
    });
};
exports.default = DocumentTypeRoutes;
