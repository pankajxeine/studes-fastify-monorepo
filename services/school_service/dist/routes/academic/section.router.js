"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SectionService_1 = require("../../services/academic/section/SectionService");
const SectionRoutes = async (app) => {
    const controller = new SectionService_1.SectionService();
    app.get('/section', async (request, reply) => {
        const result = await controller.listSection(app, request);
        return reply.send(result);
    });
    app.post('/section', async (request, reply) => {
        const result = await controller.createSection(app, request.body, request);
        return reply.send(result);
    });
    app.get('/section/:id', async (request, reply) => {
        const result = await controller.getSectionById(app, request);
        return reply.send(result);
    });
    app.put('/section/:id', async (request, reply) => {
        const result = await controller.updateSection(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/section/:id', async (request, reply) => {
        const result = await controller.deleteSection(app, request);
        return reply.send(result);
    });
};
exports.default = SectionRoutes;
