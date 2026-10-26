"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PeriodService_1 = require("../../services/timetable/period/PeriodService");
const PeriodRoutes = async (app) => {
    const controller = new PeriodService_1.PeriodService();
    app.get('/period', async (request, reply) => {
        const result = await controller.listPeriod(app, request);
        return reply.send(result);
    });
    app.post('/period', async (request, reply) => {
        const result = await controller.createPeriod(app, request.body, request);
        return reply.send(result);
    });
    app.get('/period/:id', async (request, reply) => {
        const result = await controller.getPeriodById(app, request);
        return reply.send(result);
    });
    app.put('/period/:id', async (request, reply) => {
        const result = await controller.updatePeriod(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/period/:id', async (request, reply) => {
        const result = await controller.deletePeriod(app, request);
        return reply.send(result);
    });
};
exports.default = PeriodRoutes;
