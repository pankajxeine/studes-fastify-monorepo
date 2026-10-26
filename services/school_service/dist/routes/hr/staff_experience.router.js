"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaffExperienceService_1 = require("../../services/hr/staff_experience/StaffExperienceService");
const StaffExperienceRoutes = async (app) => {
    const controller = new StaffExperienceService_1.StaffExperienceService();
    app.get('/staff_experience', async (request, reply) => {
        const result = await controller.listStaffExperience(app, request);
        return reply.send(result);
    });
    app.post('/staff_experience', async (request, reply) => {
        const result = await controller.createStaffExperience(app, request.body, request);
        return reply.send(result);
    });
    app.get('/staff_experience/:id', async (request, reply) => {
        const result = await controller.getStaffExperienceById(app, request);
        return reply.send(result);
    });
    app.put('/staff_experience/:id', async (request, reply) => {
        const result = await controller.updateStaffExperience(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/staff_experience/:id', async (request, reply) => {
        const result = await controller.deleteStaffExperience(app, request);
        return reply.send(result);
    });
};
exports.default = StaffExperienceRoutes;
