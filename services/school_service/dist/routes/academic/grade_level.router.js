"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GradeLevelService_1 = require("../../services/academic/grade_level/GradeLevelService");
const GradeLevelRoutes = async (app) => {
    const controller = new GradeLevelService_1.GradeLevelService();
    app.get('/grade_level', async (request, reply) => {
        const result = await controller.listGradeLevel(app, request);
        return reply.send(result);
    });
    app.post('/grade_level', async (request, reply) => {
        const result = await controller.createGradeLevel(app, request.body, request);
        return reply.send(result);
    });
    app.get('/grade_level/:id', async (request, reply) => {
        const result = await controller.getGradeLevelById(app, request);
        return reply.send(result);
    });
    app.put('/grade_level/:id', async (request, reply) => {
        const result = await controller.updateGradeLevel(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/grade_level/:id', async (request, reply) => {
        const result = await controller.deleteGradeLevel(app, request);
        return reply.send(result);
    });
};
exports.default = GradeLevelRoutes;
