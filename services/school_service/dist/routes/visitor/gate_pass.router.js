"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GatePassService_1 = require("../../services/visitor/gate_pass/GatePassService");
const GatePassRoutes = async (app) => {
    const controller = new GatePassService_1.GatePassService();
    app.get('/gate_pass', async (request, reply) => {
        const result = await controller.listGatePass(app, request);
        return reply.send(result);
    });
    app.post('/gate_pass', async (request, reply) => {
        const result = await controller.createGatePass(app, request.body, request);
        return reply.send(result);
    });
    app.get('/gate_pass/:id', async (request, reply) => {
        const result = await controller.getGatePassById(app, request);
        return reply.send(result);
    });
    app.put('/gate_pass/:id', async (request, reply) => {
        const result = await controller.updateGatePass(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/gate_pass/:id', async (request, reply) => {
        const result = await controller.deleteGatePass(app, request);
        return reply.send(result);
    });
};
exports.default = GatePassRoutes;
