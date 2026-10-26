"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AllergenService_1 = require("../../services/canteen/allergen/AllergenService");
const AllergenRoutes = async (app) => {
    const controller = new AllergenService_1.AllergenService();
    app.get('/allergen', async (request, reply) => {
        const result = await controller.listAllergen(app, request);
        return reply.send(result);
    });
    app.post('/allergen', async (request, reply) => {
        const result = await controller.createAllergen(app, request.body, request);
        return reply.send(result);
    });
    app.get('/allergen/:id', async (request, reply) => {
        const result = await controller.getAllergenById(app, request);
        return reply.send(result);
    });
    app.put('/allergen/:id', async (request, reply) => {
        const result = await controller.updateAllergen(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/allergen/:id', async (request, reply) => {
        const result = await controller.deleteAllergen(app, request);
        return reply.send(result);
    });
};
exports.default = AllergenRoutes;
