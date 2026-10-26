"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentTransferService_1 = require("../../services/sis/student_transfer/StudentTransferService");
const StudentTransferRoutes = async (app) => {
    const controller = new StudentTransferService_1.StudentTransferService();
    app.get('/student_transfer', async (request, reply) => {
        const result = await controller.listStudentTransfer(app, request);
        return reply.send(result);
    });
    app.post('/student_transfer', async (request, reply) => {
        const result = await controller.createStudentTransfer(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_transfer/:id', async (request, reply) => {
        const result = await controller.getStudentTransferById(app, request);
        return reply.send(result);
    });
    app.put('/student_transfer/:id', async (request, reply) => {
        const result = await controller.updateStudentTransfer(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_transfer/:id', async (request, reply) => {
        const result = await controller.deleteStudentTransfer(app, request);
        return reply.send(result);
    });
};
exports.default = StudentTransferRoutes;
