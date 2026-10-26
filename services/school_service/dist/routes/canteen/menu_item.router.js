"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuItemService_1 = require("../../services/canteen/menu_item/MenuItemService");
const MenuItemRoutes = async (app) => {
    const controller = new MenuItemService_1.MenuItemService();
    app.get('/menu_item', async (request, reply) => {
        const result = await controller.listMenuItem(app, request);
        return reply.send(result);
    });
    app.post('/menu_item', async (request, reply) => {
        const result = await controller.createMenuItem(app, request.body, request);
        return reply.send(result);
    });
    app.get('/menu_item/:id', async (request, reply) => {
        const result = await controller.getMenuItemById(app, request);
        return reply.send(result);
    });
    app.put('/menu_item/:id', async (request, reply) => {
        const result = await controller.updateMenuItem(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/menu_item/:id', async (request, reply) => {
        const result = await controller.deleteMenuItem(app, request);
        return reply.send(result);
    });
};
exports.default = MenuItemRoutes;
