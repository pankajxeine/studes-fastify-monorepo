"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubPackageUserTiersService_1 = require("../services/cpanels/sub_package_user_tiers/SubPackageUserTiersService");
const SubPackageUserTiersRoutes = async (app) => {
    const controller = new SubPackageUserTiersService_1.SubPackageUserTiersService();
    app.get('/sub_package_user_tiers', async (request, reply) => {
        return await reply.send(controller.listSubPackageUserTiers(app, request));
    });
    app.post('/sub_package_user_tiers', async (request, reply) => {
        return await reply.send(controller.createSubPackageUserTier(app, request.body, request));
    });
    app.get('/sub_package_user_tiers/:id', async (request, reply) => {
        return await reply.send(controller.getSubPackageUserTiersById(app, request));
    });
    app.put('/sub_package_user_tiers/:id', async (request, reply) => {
        return await reply.send(controller.updateSubPackageUserTier(app, request.body, request));
    });
    app.delete('/sub_package_user_tiers/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubPackageUserTier(app, request));
    });
};
exports.default = SubPackageUserTiersRoutes;
