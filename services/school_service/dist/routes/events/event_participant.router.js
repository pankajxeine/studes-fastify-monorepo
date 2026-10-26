"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventParticipantService_1 = require("../../services/events/event_participant/EventParticipantService");
const EventParticipantRoutes = async (app) => {
    const controller = new EventParticipantService_1.EventParticipantService();
    app.get('/event_participant', async (request, reply) => {
        const result = await controller.listEventParticipant(app, request);
        return reply.send(result);
    });
    app.post('/event_participant', async (request, reply) => {
        const result = await controller.createEventParticipant(app, request.body, request);
        return reply.send(result);
    });
    app.get('/event_participant/:id', async (request, reply) => {
        const result = await controller.getEventParticipantById(app, request);
        return reply.send(result);
    });
    app.put('/event_participant/:id', async (request, reply) => {
        const result = await controller.updateEventParticipant(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/event_participant/:id', async (request, reply) => {
        const result = await controller.deleteEventParticipant(app, request);
        return reply.send(result);
    });
};
exports.default = EventParticipantRoutes;
