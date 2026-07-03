"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentTypesService_1 = require("../services/cpanels/document_types/DocumentTypesService");
const DocumentTypesRoutes = async (app) => {
    const controller = new DocumentTypesService_1.DocumentTypesService();
    app.get('/document_types', async (request, reply) => {
        return await reply.send(controller.listDocumentTypes(app, request));
    });
    app.post('/document_types', async (request, reply) => {
        return await reply.send(controller.createDocumentType(app, request.body, request));
    });
    app.get('/document_types/:id', async (request, reply) => {
        return await reply.send(controller.getDocumentTypesById(app, request));
    });
    app.put('/document_types/:id', async (request, reply) => {
        return await reply.send(controller.updateDocumentType(app, request.body, request));
    });
    app.delete('/document_types/:id', async (request, reply) => {
        return await reply.send(controller.deleteDocumentType(app, request));
    });
};
exports.default = DocumentTypesRoutes;
