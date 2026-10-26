"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoticeService_1 = require("../../services/comms/notice/NoticeService");
const NoticeRoutes = async (app) => {
    const controller = new NoticeService_1.NoticeService();
    app.get('/notice', async (request, reply) => {
        const result = await controller.listNotice(app, request);
        return reply.send(result);
    });
    app.post('/notice', async (request, reply) => {
        const result = await controller.createNotice(app, request.body, request);
        return reply.send(result);
    });
    app.get('/notice/:id', async (request, reply) => {
        const result = await controller.getNoticeById(app, request);
        return reply.send(result);
    });
    app.put('/notice/:id', async (request, reply) => {
        const result = await controller.updateNotice(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/notice/:id', async (request, reply) => {
        const result = await controller.deleteNotice(app, request);
        return reply.send(result);
    });
};
exports.default = NoticeRoutes;
