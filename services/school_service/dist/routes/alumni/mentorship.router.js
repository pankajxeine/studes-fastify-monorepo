"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MentorshipService_1 = require("../../services/alumni/mentorship/MentorshipService");
const MentorshipRoutes = async (app) => {
    const controller = new MentorshipService_1.MentorshipService();
    app.get('/mentorship', async (request, reply) => {
        const result = await controller.listMentorship(app, request);
        return reply.send(result);
    });
    app.post('/mentorship', async (request, reply) => {
        const result = await controller.createMentorship(app, request.body, request);
        return reply.send(result);
    });
    app.get('/mentorship/:id', async (request, reply) => {
        const result = await controller.getMentorshipById(app, request);
        return reply.send(result);
    });
    app.put('/mentorship/:id', async (request, reply) => {
        const result = await controller.updateMentorship(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/mentorship/:id', async (request, reply) => {
        const result = await controller.deleteMentorship(app, request);
        return reply.send(result);
    });
};
exports.default = MentorshipRoutes;
