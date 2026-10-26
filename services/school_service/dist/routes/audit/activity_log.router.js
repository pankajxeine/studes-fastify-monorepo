"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActivityLogService_1 = require("../../services/audit/activity_log/ActivityLogService");
const ActivityLogRoutes = async (app) => {
    const controller = new ActivityLogService_1.ActivityLogService();
    app.get('/activity_log', async (request, reply) => {
        const result = await controller.listActivityLog(app, request);
        return reply.send(result);
    });
    app.post('/activity_log', async (request, reply) => {
        const result = await controller.createActivityLog(app, request.body, request);
        return reply.send(result);
    });
    app.get('/activity_log/:id', async (request, reply) => {
        const result = await controller.getActivityLogById(app, request);
        return reply.send(result);
    });
    app.put('/activity_log/:id', async (request, reply) => {
        const result = await controller.updateActivityLog(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/activity_log/:id', async (request, reply) => {
        const result = await controller.deleteActivityLog(app, request);
        return reply.send(result);
    });
};
exports.default = ActivityLogRoutes;
