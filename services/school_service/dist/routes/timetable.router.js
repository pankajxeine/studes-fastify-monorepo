"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimetableService_1 = require("../services/timetable/TimetableService");
const TimetableRoutes = async (app) => {
    const controller = new TimetableService_1.TimetableService();
    app.get('/timetable', async (request, reply) => {
        const result = await controller.listTimetable(app, request);
        return reply.send(result);
    });
    app.post('/timetable', async (request, reply) => {
        const result = await controller.createTimetableEntry(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = TimetableRoutes;
