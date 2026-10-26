"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonContactService_1 = require("../../services/people/person_contact/PersonContactService");
const PersonContactRoutes = async (app) => {
    const controller = new PersonContactService_1.PersonContactService();
    app.get('/person_contact', async (request, reply) => {
        const result = await controller.listPersonContact(app, request);
        return reply.send(result);
    });
    app.post('/person_contact', async (request, reply) => {
        const result = await controller.createPersonContact(app, request.body, request);
        return reply.send(result);
    });
    app.get('/person_contact/:id', async (request, reply) => {
        const result = await controller.getPersonContactById(app, request);
        return reply.send(result);
    });
    app.put('/person_contact/:id', async (request, reply) => {
        const result = await controller.updatePersonContact(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/person_contact/:id', async (request, reply) => {
        const result = await controller.deletePersonContact(app, request);
        return reply.send(result);
    });
};
exports.default = PersonContactRoutes;
