"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeesService_1 = require("../services/FeesService");
const FeesRoutes = async (app) => {
    const controller = new FeesService_1.FeesService();
    app.get('/fees/structures', async (request, reply) => {
        return await controller.listFeeStructures(app, request);
    });
    app.post('/fees/structures', async (request, reply) => {
        return await controller.createFeeStructure(app, request.body, request);
    });
    app.post('/fees/assignments', async (request, reply) => {
        return await controller.assignFeeToStudent(app, request.body, request);
    });
    app.post('/fees/payments', async (request, reply) => {
        return await controller.recordFeePayment(app, request.body, request);
    });
};
exports.default = FeesRoutes;
