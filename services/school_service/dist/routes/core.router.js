"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoreService_1 = require("../services/core/CoreService");
const CoreRoutes = async (app) => {
    const controller = new CoreService_1.CoreService();
    app.get('/students', async (request, reply) => {
        const result = await controller.listStudents(app, request);
        return reply.send(result);
    });
    app.post('/students', async (request, reply) => {
        const result = await controller.createStudent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/teachers', async (request, reply) => {
        const result = await controller.listTeachers(app, request);
        return reply.send(result);
    });
    app.post('/teachers', async (request, reply) => {
        const result = await controller.createTeacher(app, request.body, request);
        return reply.send(result);
    });
    app.get('/parents', async (request, reply) => {
        const result = await controller.listParents(app, request);
        return reply.send(result);
    });
    app.post('/parents', async (request, reply) => {
        const result = await controller.createParent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/staff', async (request, reply) => {
        const result = await controller.listStaff(app, request);
        return reply.send(result);
    });
    app.post('/staff', async (request, reply) => {
        const result = await controller.createStaff(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = CoreRoutes;
