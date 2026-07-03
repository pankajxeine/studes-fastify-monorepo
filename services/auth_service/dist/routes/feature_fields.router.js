"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeatureFieldsService_1 = require("../services/cpanels/feature_fields/FeatureFieldsService");
const FeatureFieldsRoutes = async (app) => {
    const controller = new FeatureFieldsService_1.FeatureFieldsService();
    app.get('/feature_fields', async (request, reply) => {
        return await reply.send(controller.listFeatureFields(app, request));
    });
    app.post('/feature_fields', async (request, reply) => {
        return await reply.send(controller.createFeatureField(app, request.body, request));
    });
    app.get('/feature_fields/:id', async (request, reply) => {
        return await reply.send(controller.getFeatureFieldsById(app, request));
    });
    app.put('/feature_fields/:id', async (request, reply) => {
        return await reply.send(controller.updateFeatureField(app, request.body, request));
    });
    app.delete('/feature_fields/:id', async (request, reply) => {
        return await reply.send(controller.deleteFeatureField(app, request));
    });
};
exports.default = FeatureFieldsRoutes;
