"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleMaintenanceService_1 = require("../../services/transport/vehicle_maintenance/VehicleMaintenanceService");
const VehicleMaintenanceRoutes = async (app) => {
    const controller = new VehicleMaintenanceService_1.VehicleMaintenanceService();
    app.get('/vehicle_maintenance', async (request, reply) => {
        const result = await controller.listVehicleMaintenance(app, request);
        return reply.send(result);
    });
    app.post('/vehicle_maintenance', async (request, reply) => {
        const result = await controller.createVehicleMaintenance(app, request.body, request);
        return reply.send(result);
    });
    app.get('/vehicle_maintenance/:id', async (request, reply) => {
        const result = await controller.getVehicleMaintenanceById(app, request);
        return reply.send(result);
    });
    app.put('/vehicle_maintenance/:id', async (request, reply) => {
        const result = await controller.updateVehicleMaintenance(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/vehicle_maintenance/:id', async (request, reply) => {
        const result = await controller.deleteVehicleMaintenance(app, request);
        return reply.send(result);
    });
};
exports.default = VehicleMaintenanceRoutes;
