"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VendorService_1 = require("../../services/org/vendor/VendorService");
const VendorRoutes = async (app) => {
    const controller = new VendorService_1.VendorService();
    app.get('/vendor', async (request, reply) => {
        const result = await controller.listVendor(app, request);
        return reply.send(result);
    });
    app.post('/vendor', async (request, reply) => {
        const result = await controller.createVendor(app, request.body, request);
        return reply.send(result);
    });
    app.get('/vendor/:id', async (request, reply) => {
        const result = await controller.getVendorById(app, request);
        return reply.send(result);
    });
    app.put('/vendor/:id', async (request, reply) => {
        const result = await controller.updateVendor(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/vendor/:id', async (request, reply) => {
        const result = await controller.deleteVendor(app, request);
        return reply.send(result);
    });
};
exports.default = VendorRoutes;
