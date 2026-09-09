"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoreService_1 = require("../services/CoreService");
const CoreRoutes = async (app) => {
    const controller = new CoreService_1.CoreService();
    app.get('/students', async (request, reply) => {
        return await controller.listStudents(app, request);
    });
    app.post('/students', async (request, reply) => {
        return await controller.createStudent(app, request.body, request);
    });
    app.get('/teachers', async (request, reply) => {
        return await controller.listTeachers(app, request);
    });
    app.post('/teachers', async (request, reply) => {
        return await controller.createTeacher(app, request.body, request);
    });
    app.get('/parents', async (request, reply) => {
        return await controller.listParents(app, request);
    });
    app.post('/parents', async (request, reply) => {
        return await controller.createParent(app, request.body, request);
    });
    app.get('/staff', async (request, reply) => {
        return await controller.listStaff(app, request);
    });
    app.post('/staff', async (request, reply) => {
        return await controller.createStaff(app, request.body, request);
    });
};
exports.default = CoreRoutes;
