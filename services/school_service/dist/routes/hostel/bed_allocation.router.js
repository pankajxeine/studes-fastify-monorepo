"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BedAllocationService_1 = require("../../services/hostel/bed_allocation/BedAllocationService");
const BedAllocationRoutes = async (app) => {
    const controller = new BedAllocationService_1.BedAllocationService();
    app.get('/bed_allocation', async (request, reply) => {
        const result = await controller.listBedAllocation(app, request);
        return reply.send(result);
    });
    app.post('/bed_allocation', async (request, reply) => {
        const result = await controller.createBedAllocation(app, request.body, request);
        return reply.send(result);
    });
    app.get('/bed_allocation/:id', async (request, reply) => {
        const result = await controller.getBedAllocationById(app, request);
        return reply.send(result);
    });
    app.put('/bed_allocation/:id', async (request, reply) => {
        const result = await controller.updateBedAllocation(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/bed_allocation/:id', async (request, reply) => {
        const result = await controller.deleteBedAllocation(app, request);
        return reply.send(result);
    });
};
exports.default = BedAllocationRoutes;
