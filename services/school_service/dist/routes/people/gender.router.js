"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenderService_1 = require("../../services/people/gender/GenderService");
const GenderRoutes = async (app) => {
    const controller = new GenderService_1.GenderService();
    app.get('/gender', async (request, reply) => {
        const result = await controller.listGender(app, request);
        return reply.send(result);
    });
    app.post('/gender', async (request, reply) => {
        const result = await controller.createGender(app, request.body, request);
        return reply.send(result);
    });
    app.get('/gender/:id', async (request, reply) => {
        const result = await controller.getGenderById(app, request);
        return reply.send(result);
    });
    app.put('/gender/:id', async (request, reply) => {
        const result = await controller.updateGender(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/gender/:id', async (request, reply) => {
        const result = await controller.deleteGender(app, request);
        return reply.send(result);
    });
};
exports.default = GenderRoutes;
