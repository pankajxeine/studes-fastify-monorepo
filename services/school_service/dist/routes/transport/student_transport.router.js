"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentTransportService_1 = require("../../services/transport/student_transport/StudentTransportService");
const StudentTransportRoutes = async (app) => {
    const controller = new StudentTransportService_1.StudentTransportService();
    app.get('/student_transport', async (request, reply) => {
        const result = await controller.listStudentTransport(app, request);
        return reply.send(result);
    });
    app.post('/student_transport', async (request, reply) => {
        const result = await controller.createStudentTransport(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_transport/:id', async (request, reply) => {
        const result = await controller.getStudentTransportById(app, request);
        return reply.send(result);
    });
    app.put('/student_transport/:id', async (request, reply) => {
        const result = await controller.updateStudentTransport(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_transport/:id', async (request, reply) => {
        const result = await controller.deleteStudentTransport(app, request);
        return reply.send(result);
    });
};
exports.default = StudentTransportRoutes;
