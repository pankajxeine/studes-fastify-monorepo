"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileService_1 = require("../../services/docs/file/FileService");
const FileRoutes = async (app) => {
    const controller = new FileService_1.FileService();
    app.get('/file', async (request, reply) => {
        const result = await controller.listFile(app, request);
        return reply.send(result);
    });
    app.post('/file', async (request, reply) => {
        const result = await controller.createFile(app, request.body, request);
        return reply.send(result);
    });
    app.get('/file/:id', async (request, reply) => {
        const result = await controller.getFileById(app, request);
        return reply.send(result);
    });
    app.put('/file/:id', async (request, reply) => {
        const result = await controller.updateFile(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/file/:id', async (request, reply) => {
        const result = await controller.deleteFile(app, request);
        return reply.send(result);
    });
};
exports.default = FileRoutes;
