"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentSubmissionService_1 = require("../../services/lms/assignment_submission/AssignmentSubmissionService");
const AssignmentSubmissionRoutes = async (app) => {
    const controller = new AssignmentSubmissionService_1.AssignmentSubmissionService();
    app.get('/assignment_submission', async (request, reply) => {
        const result = await controller.listAssignmentSubmission(app, request);
        return reply.send(result);
    });
    app.post('/assignment_submission', async (request, reply) => {
        const result = await controller.createAssignmentSubmission(app, request.body, request);
        return reply.send(result);
    });
    app.get('/assignment_submission/:id', async (request, reply) => {
        const result = await controller.getAssignmentSubmissionById(app, request);
        return reply.send(result);
    });
    app.put('/assignment_submission/:id', async (request, reply) => {
        const result = await controller.updateAssignmentSubmission(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/assignment_submission/:id', async (request, reply) => {
        const result = await controller.deleteAssignmentSubmission(app, request);
        return reply.send(result);
    });
};
exports.default = AssignmentSubmissionRoutes;
