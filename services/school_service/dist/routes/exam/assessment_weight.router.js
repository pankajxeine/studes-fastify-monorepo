"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssessmentWeightService_1 = require("../../services/exam/assessment_weight/AssessmentWeightService");
const AssessmentWeightRoutes = async (app) => {
    const controller = new AssessmentWeightService_1.AssessmentWeightService();
    app.get('/assessment_weight', async (request, reply) => {
        const result = await controller.listAssessmentWeight(app, request);
        return reply.send(result);
    });
    app.post('/assessment_weight', async (request, reply) => {
        const result = await controller.createAssessmentWeight(app, request.body, request);
        return reply.send(result);
    });
    app.get('/assessment_weight/:id', async (request, reply) => {
        const result = await controller.getAssessmentWeightById(app, request);
        return reply.send(result);
    });
    app.put('/assessment_weight/:id', async (request, reply) => {
        const result = await controller.updateAssessmentWeight(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/assessment_weight/:id', async (request, reply) => {
        const result = await controller.deleteAssessmentWeight(app, request);
        return reply.send(result);
    });
};
exports.default = AssessmentWeightRoutes;
