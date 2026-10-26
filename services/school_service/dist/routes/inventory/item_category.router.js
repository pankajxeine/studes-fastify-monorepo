"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCategoryService_1 = require("../../services/inventory/item_category/ItemCategoryService");
const ItemCategoryRoutes = async (app) => {
    const controller = new ItemCategoryService_1.ItemCategoryService();
    app.get('/item_category', async (request, reply) => {
        const result = await controller.listItemCategory(app, request);
        return reply.send(result);
    });
    app.post('/item_category', async (request, reply) => {
        const result = await controller.createItemCategory(app, request.body, request);
        return reply.send(result);
    });
    app.get('/item_category/:id', async (request, reply) => {
        const result = await controller.getItemCategoryById(app, request);
        return reply.send(result);
    });
    app.put('/item_category/:id', async (request, reply) => {
        const result = await controller.updateItemCategory(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/item_category/:id', async (request, reply) => {
        const result = await controller.deleteItemCategory(app, request);
        return reply.send(result);
    });
};
exports.default = ItemCategoryRoutes;
