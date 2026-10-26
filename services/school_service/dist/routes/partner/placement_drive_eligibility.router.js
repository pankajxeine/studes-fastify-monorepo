"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlacementDriveEligibilityService_1 = require("../../services/partner/placement_drive_eligibility/PlacementDriveEligibilityService");
const PlacementDriveEligibilityRoutes = async (app) => {
    const controller = new PlacementDriveEligibilityService_1.PlacementDriveEligibilityService();
    app.get('/placement_drive_eligibility', async (request, reply) => {
        const result = await controller.listPlacementDriveEligibility(app, request);
        return reply.send(result);
    });
    app.post('/placement_drive_eligibility', async (request, reply) => {
        const result = await controller.createPlacementDriveEligibility(app, request.body, request);
        return reply.send(result);
    });
    app.get('/placement_drive_eligibility/:id', async (request, reply) => {
        const result = await controller.getPlacementDriveEligibilityById(app, request);
        return reply.send(result);
    });
    app.put('/placement_drive_eligibility/:id', async (request, reply) => {
        const result = await controller.updatePlacementDriveEligibility(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/placement_drive_eligibility/:id', async (request, reply) => {
        const result = await controller.deletePlacementDriveEligibility(app, request);
        return reply.send(result);
    });
};
exports.default = PlacementDriveEligibilityRoutes;
