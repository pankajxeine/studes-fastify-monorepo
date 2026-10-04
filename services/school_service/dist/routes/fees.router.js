"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeesService_1 = require("../services/fees/FeesService");
const FeesRoutes = async (app) => {
    const controller = new FeesService_1.FeesService();
    app.get('/fees/structures', async (request, reply) => {
        const result = await controller.listFeeStructures(app, request);
        return reply.send(result);
    });
    app.post('/fees/structures', async (request, reply) => {
        const result = await controller.createFeeStructure(app, request.body, request);
        return reply.send(result);
    });
    app.post('/fees/assignments', async (request, reply) => {
        const result = await controller.assignFeeToStudent(app, request.body, request);
        return reply.send(result);
    });
    app.post('/fees/payments', async (request, reply) => {
        const result = await controller.recordFeePayment(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = FeesRoutes;
