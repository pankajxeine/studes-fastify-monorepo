"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HolidayService_1 = require("../../services/academic/holiday/HolidayService");
const HolidayRoutes = async (app) => {
    const controller = new HolidayService_1.HolidayService();
    app.get('/holiday', async (request, reply) => {
        const result = await controller.listHoliday(app, request);
        return reply.send(result);
    });
    app.post('/holiday', async (request, reply) => {
        const result = await controller.createHoliday(app, request.body, request);
        return reply.send(result);
    });
    app.get('/holiday/:id', async (request, reply) => {
        const result = await controller.getHolidayById(app, request);
        return reply.send(result);
    });
    app.put('/holiday/:id', async (request, reply) => {
        const result = await controller.updateHoliday(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/holiday/:id', async (request, reply) => {
        const result = await controller.deleteHoliday(app, request);
        return reply.send(result);
    });
};
exports.default = HolidayRoutes;
