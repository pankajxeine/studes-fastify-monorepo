"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HouseService_1 = require("../../services/sis/house/HouseService");
const HouseRoutes = async (app) => {
    const controller = new HouseService_1.HouseService();
    app.get('/house', async (request, reply) => {
        const result = await controller.listHouse(app, request);
        return reply.send(result);
    });
    app.post('/house', async (request, reply) => {
        const result = await controller.createHouse(app, request.body, request);
        return reply.send(result);
    });
    app.get('/house/:id', async (request, reply) => {
        const result = await controller.getHouseById(app, request);
        return reply.send(result);
    });
    app.put('/house/:id', async (request, reply) => {
        const result = await controller.updateHouse(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/house/:id', async (request, reply) => {
        const result = await controller.deleteHouse(app, request);
        return reply.send(result);
    });
};
exports.default = HouseRoutes;
