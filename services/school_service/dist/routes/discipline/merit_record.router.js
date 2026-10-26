"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeritRecordService_1 = require("../../services/discipline/merit_record/MeritRecordService");
const MeritRecordRoutes = async (app) => {
    const controller = new MeritRecordService_1.MeritRecordService();
    app.get('/merit_record', async (request, reply) => {
        const result = await controller.listMeritRecord(app, request);
        return reply.send(result);
    });
    app.post('/merit_record', async (request, reply) => {
        const result = await controller.createMeritRecord(app, request.body, request);
        return reply.send(result);
    });
    app.get('/merit_record/:id', async (request, reply) => {
        const result = await controller.getMeritRecordById(app, request);
        return reply.send(result);
    });
    app.put('/merit_record/:id', async (request, reply) => {
        const result = await controller.updateMeritRecord(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/merit_record/:id', async (request, reply) => {
        const result = await controller.deleteMeritRecord(app, request);
        return reply.send(result);
    });
};
exports.default = MeritRecordRoutes;
