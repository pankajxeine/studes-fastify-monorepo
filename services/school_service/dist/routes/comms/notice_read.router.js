"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoticeReadService_1 = require("../../services/comms/notice_read/NoticeReadService");
const NoticeReadRoutes = async (app) => {
    const controller = new NoticeReadService_1.NoticeReadService();
    app.get('/notice_read', async (request, reply) => {
        const result = await controller.listNoticeRead(app, request);
        return reply.send(result);
    });
    app.post('/notice_read', async (request, reply) => {
        const result = await controller.createNoticeRead(app, request.body, request);
        return reply.send(result);
    });
    app.get('/notice_read/:id', async (request, reply) => {
        const result = await controller.getNoticeReadById(app, request);
        return reply.send(result);
    });
    app.put('/notice_read/:id', async (request, reply) => {
        const result = await controller.updateNoticeRead(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/notice_read/:id', async (request, reply) => {
        const result = await controller.deleteNoticeRead(app, request);
        return reply.send(result);
    });
};
exports.default = NoticeReadRoutes;
