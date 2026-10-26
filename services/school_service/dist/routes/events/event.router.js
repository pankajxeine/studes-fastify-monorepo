"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventService_1 = require("../../services/events/event/EventService");
const EventRoutes = async (app) => {
    const controller = new EventService_1.EventService();
    app.get('/event', async (request, reply) => {
        const result = await controller.listEvent(app, request);
        return reply.send(result);
    });
    app.post('/event', async (request, reply) => {
        const result = await controller.createEvent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/event/:id', async (request, reply) => {
        const result = await controller.getEventById(app, request);
        return reply.send(result);
    });
    app.put('/event/:id', async (request, reply) => {
        const result = await controller.updateEvent(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/event/:id', async (request, reply) => {
        const result = await controller.deleteEvent(app, request);
        return reply.send(result);
    });
};
exports.default = EventRoutes;
