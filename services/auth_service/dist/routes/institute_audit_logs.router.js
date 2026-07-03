"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstituteAuditLogsService_1 = require("../services/cpanels/institute_audit_logs/InstituteAuditLogsService");
const InstituteAuditLogsRoutes = async (app) => {
    const controller = new InstituteAuditLogsService_1.InstituteAuditLogsService();
    app.get('/institute_audit_logs', async (request, reply) => {
        return await reply.send(controller.listInstituteAuditLogs(app, request));
    });
    app.post('/institute_audit_logs', async (request, reply) => {
        return await reply.send(controller.createInstituteAuditLog(app, request.body, request));
    });
    app.get('/institute_audit_logs/:id', async (request, reply) => {
        return await reply.send(controller.getInstituteAuditLogsById(app, request));
    });
    app.put('/institute_audit_logs/:id', async (request, reply) => {
        return await reply.send(controller.updateInstituteAuditLog(app, request.body, request));
    });
    app.delete('/institute_audit_logs/:id', async (request, reply) => {
        return await reply.send(controller.deleteInstituteAuditLog(app, request));
    });
};
exports.default = InstituteAuditLogsRoutes;
