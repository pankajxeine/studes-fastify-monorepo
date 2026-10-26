"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuItemAllergenService_1 = require("../../services/canteen/menu_item_allergen/MenuItemAllergenService");
const MenuItemAllergenRoutes = async (app) => {
    const controller = new MenuItemAllergenService_1.MenuItemAllergenService();
    app.get('/menu_item_allergen', async (request, reply) => {
        const result = await controller.listMenuItemAllergen(app, request);
        return reply.send(result);
    });
    app.post('/menu_item_allergen', async (request, reply) => {
        const result = await controller.createMenuItemAllergen(app, request.body, request);
        return reply.send(result);
    });
    app.get('/menu_item_allergen/:id', async (request, reply) => {
        const result = await controller.getMenuItemAllergenById(app, request);
        return reply.send(result);
    });
    app.put('/menu_item_allergen/:id', async (request, reply) => {
        const result = await controller.updateMenuItemAllergen(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/menu_item_allergen/:id', async (request, reply) => {
        const result = await controller.deleteMenuItemAllergen(app, request);
        return reply.send(result);
    });
};
exports.default = MenuItemAllergenRoutes;
