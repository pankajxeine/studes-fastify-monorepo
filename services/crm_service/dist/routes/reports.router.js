"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReportsService_1 = require("../services/reports/ReportsService");
const ReportsRoutes = async (app) => {
    const controller = new ReportsService_1.ReportsService();
    app.post('/reports/run', async (request, reply) => {
        const result = await controller.runReport(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = ReportsRoutes;
