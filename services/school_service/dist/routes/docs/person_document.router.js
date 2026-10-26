"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonDocumentService_1 = require("../../services/docs/person_document/PersonDocumentService");
const PersonDocumentRoutes = async (app) => {
    const controller = new PersonDocumentService_1.PersonDocumentService();
    app.get('/person_document', async (request, reply) => {
        const result = await controller.listPersonDocument(app, request);
        return reply.send(result);
    });
    app.post('/person_document', async (request, reply) => {
        const result = await controller.createPersonDocument(app, request.body, request);
        return reply.send(result);
    });
    app.get('/person_document/:id', async (request, reply) => {
        const result = await controller.getPersonDocumentById(app, request);
        return reply.send(result);
    });
    app.put('/person_document/:id', async (request, reply) => {
        const result = await controller.updatePersonDocument(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/person_document/:id', async (request, reply) => {
        const result = await controller.deletePersonDocument(app, request);
        return reply.send(result);
    });
};
exports.default = PersonDocumentRoutes;
