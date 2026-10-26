"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssessmentTypeService_1 = require("../../services/exam/assessment_type/AssessmentTypeService");
const AssessmentTypeRoutes = async (app) => {
    const controller = new AssessmentTypeService_1.AssessmentTypeService();
    app.get('/assessment_type', async (request, reply) => {
        const result = await controller.listAssessmentType(app, request);
        return reply.send(result);
    });
    app.post('/assessment_type', async (request, reply) => {
        const result = await controller.createAssessmentType(app, request.body, request);
        return reply.send(result);
    });
    app.get('/assessment_type/:id', async (request, reply) => {
        const result = await controller.getAssessmentTypeById(app, request);
        return reply.send(result);
    });
    app.put('/assessment_type/:id', async (request, reply) => {
        const result = await controller.updateAssessmentType(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/assessment_type/:id', async (request, reply) => {
        const result = await controller.deleteAssessmentType(app, request);
        return reply.send(result);
    });
};
exports.default = AssessmentTypeRoutes;
