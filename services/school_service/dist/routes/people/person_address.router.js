"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonAddressService_1 = require("../../services/people/person_address/PersonAddressService");
const PersonAddressRoutes = async (app) => {
    const controller = new PersonAddressService_1.PersonAddressService();
    app.get('/person_address', async (request, reply) => {
        const result = await controller.listPersonAddress(app, request);
        return reply.send(result);
    });
    app.post('/person_address', async (request, reply) => {
        const result = await controller.createPersonAddress(app, request.body, request);
        return reply.send(result);
    });
    app.get('/person_address/:id', async (request, reply) => {
        const result = await controller.getPersonAddressById(app, request);
        return reply.send(result);
    });
    app.put('/person_address/:id', async (request, reply) => {
        const result = await controller.updatePersonAddress(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/person_address/:id', async (request, reply) => {
        const result = await controller.deletePersonAddress(app, request);
        return reply.send(result);
    });
};
exports.default = PersonAddressRoutes;
