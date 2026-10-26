"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RelationshipTypeService_1 = require("../../services/people/relationship_type/RelationshipTypeService");
const RelationshipTypeRoutes = async (app) => {
    const controller = new RelationshipTypeService_1.RelationshipTypeService();
    app.get('/relationship_type', async (request, reply) => {
        const result = await controller.listRelationshipType(app, request);
        return reply.send(result);
    });
    app.post('/relationship_type', async (request, reply) => {
        const result = await controller.createRelationshipType(app, request.body, request);
        return reply.send(result);
    });
    app.get('/relationship_type/:id', async (request, reply) => {
        const result = await controller.getRelationshipTypeById(app, request);
        return reply.send(result);
    });
    app.put('/relationship_type/:id', async (request, reply) => {
        const result = await controller.updateRelationshipType(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/relationship_type/:id', async (request, reply) => {
        const result = await controller.deleteRelationshipType(app, request);
        return reply.send(result);
    });
};
exports.default = RelationshipTypeRoutes;
