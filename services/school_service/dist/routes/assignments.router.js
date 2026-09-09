"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentsService_1 = require("../services/AssignmentsService");
const AssignmentsRoutes = async (app) => {
    const controller = new AssignmentsService_1.AssignmentsService();
    app.get('/assignments', async (request, reply) => {
        return await controller.listAssignments(app, request);
    });
    app.post('/assignments', async (request, reply) => {
        return await controller.createAssignment(app, request.body, request);
    });
    app.post('/assignments/:id/submissions', async (request, reply) => {
        return await controller.submitAssignment(app, request.body, request);
    });
};
exports.default = AssignmentsRoutes;
