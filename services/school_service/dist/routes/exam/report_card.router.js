"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReportCardService_1 = require("../../services/exam/report_card/ReportCardService");
const ReportCardRoutes = async (app) => {
    const controller = new ReportCardService_1.ReportCardService();
    app.get('/report_card', async (request, reply) => {
        const result = await controller.listReportCard(app, request);
        return reply.send(result);
    });
    app.post('/report_card', async (request, reply) => {
        const result = await controller.createReportCard(app, request.body, request);
        return reply.send(result);
    });
    app.get('/report_card/:id', async (request, reply) => {
        const result = await controller.getReportCardById(app, request);
        return reply.send(result);
    });
    app.put('/report_card/:id', async (request, reply) => {
        const result = await controller.updateReportCard(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/report_card/:id', async (request, reply) => {
        const result = await controller.deleteReportCard(app, request);
        return reply.send(result);
    });
};
exports.default = ReportCardRoutes;
