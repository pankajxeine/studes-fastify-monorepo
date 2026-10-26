"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonService_1 = require("../../services/people/person/PersonService");
const PersonRoutes = async (app) => {
    const controller = new PersonService_1.PersonService();
    app.get('/person', async (request, reply) => {
        const result = await controller.listPerson(app, request);
        return reply.send(result);
    });
    app.post('/person', async (request, reply) => {
        const result = await controller.createPerson(app, request.body, request);
        return reply.send(result);
    });
    app.get('/person/:id', async (request, reply) => {
        const result = await controller.getPersonById(app, request);
        return reply.send(result);
    });
    app.put('/person/:id', async (request, reply) => {
        const result = await controller.updatePerson(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/person/:id', async (request, reply) => {
        const result = await controller.deletePerson(app, request);
        return reply.send(result);
    });
};
exports.default = PersonRoutes;
