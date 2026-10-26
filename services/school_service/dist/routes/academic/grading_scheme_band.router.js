"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GradingSchemeBandService_1 = require("../../services/academic/grading_scheme_band/GradingSchemeBandService");
const GradingSchemeBandRoutes = async (app) => {
    const controller = new GradingSchemeBandService_1.GradingSchemeBandService();
    app.get('/grading_scheme_band', async (request, reply) => {
        const result = await controller.listGradingSchemeBand(app, request);
        return reply.send(result);
    });
    app.post('/grading_scheme_band', async (request, reply) => {
        const result = await controller.createGradingSchemeBand(app, request.body, request);
        return reply.send(result);
    });
    app.get('/grading_scheme_band/:id', async (request, reply) => {
        const result = await controller.getGradingSchemeBandById(app, request);
        return reply.send(result);
    });
    app.put('/grading_scheme_band/:id', async (request, reply) => {
        const result = await controller.updateGradingSchemeBand(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/grading_scheme_band/:id', async (request, reply) => {
        const result = await controller.deleteGradingSchemeBand(app, request);
        return reply.send(result);
    });
};
exports.default = GradingSchemeBandRoutes;
