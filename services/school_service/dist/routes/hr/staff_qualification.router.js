"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaffQualificationService_1 = require("../../services/hr/staff_qualification/StaffQualificationService");
const StaffQualificationRoutes = async (app) => {
    const controller = new StaffQualificationService_1.StaffQualificationService();
    app.get('/staff_qualification', async (request, reply) => {
        const result = await controller.listStaffQualification(app, request);
        return reply.send(result);
    });
    app.post('/staff_qualification', async (request, reply) => {
        const result = await controller.createStaffQualification(app, request.body, request);
        return reply.send(result);
    });
    app.get('/staff_qualification/:id', async (request, reply) => {
        const result = await controller.getStaffQualificationById(app, request);
        return reply.send(result);
    });
    app.put('/staff_qualification/:id', async (request, reply) => {
        const result = await controller.updateStaffQualification(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/staff_qualification/:id', async (request, reply) => {
        const result = await controller.deleteStaffQualification(app, request);
        return reply.send(result);
    });
};
exports.default = StaffQualificationRoutes;
