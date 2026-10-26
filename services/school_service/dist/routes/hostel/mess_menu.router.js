"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessMenuService_1 = require("../../services/hostel/mess_menu/MessMenuService");
const MessMenuRoutes = async (app) => {
    const controller = new MessMenuService_1.MessMenuService();
    app.get('/mess_menu', async (request, reply) => {
        const result = await controller.listMessMenu(app, request);
        return reply.send(result);
    });
    app.post('/mess_menu', async (request, reply) => {
        const result = await controller.createMessMenu(app, request.body, request);
        return reply.send(result);
    });
    app.get('/mess_menu/:id', async (request, reply) => {
        const result = await controller.getMessMenuById(app, request);
        return reply.send(result);
    });
    app.put('/mess_menu/:id', async (request, reply) => {
        const result = await controller.updateMessMenu(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/mess_menu/:id', async (request, reply) => {
        const result = await controller.deleteMessMenu(app, request);
        return reply.send(result);
    });
};
exports.default = MessMenuRoutes;
