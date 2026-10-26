"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemService_1 = require("../../services/inventory/item/ItemService");
const ItemRoutes = async (app) => {
    const controller = new ItemService_1.ItemService();
    app.get('/item', async (request, reply) => {
        const result = await controller.listItem(app, request);
        return reply.send(result);
    });
    app.post('/item', async (request, reply) => {
        const result = await controller.createItem(app, request.body, request);
        return reply.send(result);
    });
    app.get('/item/:id', async (request, reply) => {
        const result = await controller.getItemById(app, request);
        return reply.send(result);
    });
    app.put('/item/:id', async (request, reply) => {
        const result = await controller.updateItem(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/item/:id', async (request, reply) => {
        const result = await controller.deleteItem(app, request);
        return reply.send(result);
    });
};
exports.default = ItemRoutes;
