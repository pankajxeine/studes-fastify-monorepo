"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationAssessmentService_1 = require("../../services/admission/application_assessment/ApplicationAssessmentService");
const ApplicationAssessmentRoutes = async (app) => {
    const controller = new ApplicationAssessmentService_1.ApplicationAssessmentService();
    app.get('/application_assessment', async (request, reply) => {
        const result = await controller.listApplicationAssessment(app, request);
        return reply.send(result);
    });
    app.post('/application_assessment', async (request, reply) => {
        const result = await controller.createApplicationAssessment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/application_assessment/:id', async (request, reply) => {
        const result = await controller.getApplicationAssessmentById(app, request);
        return reply.send(result);
    });
    app.put('/application_assessment/:id', async (request, reply) => {
        const result = await controller.updateApplicationAssessment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/application_assessment/:id', async (request, reply) => {
        const result = await controller.deleteApplicationAssessment(app, request);
        return reply.send(result);
    });
};
exports.default = ApplicationAssessmentRoutes;
