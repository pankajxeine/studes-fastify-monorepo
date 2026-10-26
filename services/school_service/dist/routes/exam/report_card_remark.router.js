"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReportCardRemarkService_1 = require("../../services/exam/report_card_remark/ReportCardRemarkService");
const ReportCardRemarkRoutes = async (app) => {
    const controller = new ReportCardRemarkService_1.ReportCardRemarkService();
    app.get('/report_card_remark', async (request, reply) => {
        const result = await controller.listReportCardRemark(app, request);
        return reply.send(result);
    });
    app.post('/report_card_remark', async (request, reply) => {
        const result = await controller.createReportCardRemark(app, request.body, request);
        return reply.send(result);
    });
    app.get('/report_card_remark/:id', async (request, reply) => {
        const result = await controller.getReportCardRemarkById(app, request);
        return reply.send(result);
    });
    app.put('/report_card_remark/:id', async (request, reply) => {
        const result = await controller.updateReportCardRemark(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/report_card_remark/:id', async (request, reply) => {
        const result = await controller.deleteReportCardRemark(app, request);
        return reply.send(result);
    });
};
exports.default = ReportCardRemarkRoutes;
