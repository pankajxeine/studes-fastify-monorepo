"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentService_1 = require("../../services/lms/assignment/AssignmentService");
const AssignmentRoutes = async (app) => {
    const controller = new AssignmentService_1.AssignmentService();
    app.get('/assignment', async (request, reply) => {
        const result = await controller.listAssignment(app, request);
        return reply.send(result);
    });
    app.post('/assignment', async (request, reply) => {
        const result = await controller.createAssignment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/assignment/:id', async (request, reply) => {
        const result = await controller.getAssignmentById(app, request);
        return reply.send(result);
    });
    app.put('/assignment/:id', async (request, reply) => {
        const result = await controller.updateAssignment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/assignment/:id', async (request, reply) => {
        const result = await controller.deleteAssignment(app, request);
        return reply.send(result);
    });
};
exports.default = AssignmentRoutes;
