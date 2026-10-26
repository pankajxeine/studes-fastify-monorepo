"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AcademicYearService_1 = require("../../services/academic/academic_year/AcademicYearService");
const AcademicYearRoutes = async (app) => {
    const controller = new AcademicYearService_1.AcademicYearService();
    app.get('/academic_year', async (request, reply) => {
        const result = await controller.listAcademicYear(app, request);
        return reply.send(result);
    });
    app.post('/academic_year', async (request, reply) => {
        const result = await controller.createAcademicYear(app, request.body, request);
        return reply.send(result);
    });
    app.get('/academic_year/:id', async (request, reply) => {
        const result = await controller.getAcademicYearById(app, request);
        return reply.send(result);
    });
    app.put('/academic_year/:id', async (request, reply) => {
        const result = await controller.updateAcademicYear(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/academic_year/:id', async (request, reply) => {
        const result = await controller.deleteAcademicYear(app, request);
        return reply.send(result);
    });
};
exports.default = AcademicYearRoutes;
