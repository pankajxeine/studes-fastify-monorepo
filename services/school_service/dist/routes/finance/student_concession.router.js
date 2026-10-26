"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentConcessionService_1 = require("../../services/finance/student_concession/StudentConcessionService");
const StudentConcessionRoutes = async (app) => {
    const controller = new StudentConcessionService_1.StudentConcessionService();
    app.get('/student_concession', async (request, reply) => {
        const result = await controller.listStudentConcession(app, request);
        return reply.send(result);
    });
    app.post('/student_concession', async (request, reply) => {
        const result = await controller.createStudentConcession(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_concession/:id', async (request, reply) => {
        const result = await controller.getStudentConcessionById(app, request);
        return reply.send(result);
    });
    app.put('/student_concession/:id', async (request, reply) => {
        const result = await controller.updateStudentConcession(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_concession/:id', async (request, reply) => {
        const result = await controller.deleteStudentConcession(app, request);
        return reply.send(result);
    });
};
exports.default = StudentConcessionRoutes;
