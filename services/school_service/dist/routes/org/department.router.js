"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DepartmentService_1 = require("../../services/org/department/DepartmentService");
const DepartmentRoutes = async (app) => {
    const controller = new DepartmentService_1.DepartmentService();
    app.get('/department', async (request, reply) => {
        const result = await controller.listDepartment(app, request);
        return reply.send(result);
    });
    app.post('/department', async (request, reply) => {
        const result = await controller.createDepartment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/department/:id', async (request, reply) => {
        const result = await controller.getDepartmentById(app, request);
        return reply.send(result);
    });
    app.put('/department/:id', async (request, reply) => {
        const result = await controller.updateDepartment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/department/:id', async (request, reply) => {
        const result = await controller.deleteDepartment(app, request);
        return reply.send(result);
    });
};
exports.default = DepartmentRoutes;
