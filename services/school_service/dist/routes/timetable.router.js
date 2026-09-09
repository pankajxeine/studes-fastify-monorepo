"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimetableService_1 = require("../services/TimetableService");
const TimetableRoutes = async (app) => {
    const controller = new TimetableService_1.TimetableService();
    app.get('/timetable', async (request, reply) => {
        return await controller.listTimetable(app, request);
    });
    app.post('/timetable', async (request, reply) => {
        return await controller.createTimetableEntry(app, request.body, request);
    });
};
exports.default = TimetableRoutes;
