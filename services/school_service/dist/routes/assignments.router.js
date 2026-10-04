"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentsService_1 = require("../services/assignments/AssignmentsService");
const AssignmentsRoutes = async (app) => {
    const controller = new AssignmentsService_1.AssignmentsService();
    app.get('/assignments', async (request, reply) => {
        const result = await controller.listAssignments(app, request);
        return reply.send(result);
    });
    app.post('/assignments', async (request, reply) => {
        const result = await controller.createAssignment(app, request.body, request);
        return reply.send(result);
    });
    app.post('/assignments/:id/submissions', async (request, reply) => {
        const result = await controller.submitAssignment(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = AssignmentsRoutes;
