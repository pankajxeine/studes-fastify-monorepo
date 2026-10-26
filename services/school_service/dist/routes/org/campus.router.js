"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CampusService_1 = require("../../services/org/campus/CampusService");
const CampusRoutes = async (app) => {
    const controller = new CampusService_1.CampusService();
    app.get('/campus', async (request, reply) => {
        const result = await controller.listCampus(app, request);
        return reply.send(result);
    });
    app.post('/campus', async (request, reply) => {
        const result = await controller.createCampus(app, request.body, request);
        return reply.send(result);
    });
    app.get('/campus/:id', async (request, reply) => {
        const result = await controller.getCampusById(app, request);
        return reply.send(result);
    });
    app.put('/campus/:id', async (request, reply) => {
        const result = await controller.updateCampus(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/campus/:id', async (request, reply) => {
        const result = await controller.deleteCampus(app, request);
        return reply.send(result);
    });
};
exports.default = CampusRoutes;
