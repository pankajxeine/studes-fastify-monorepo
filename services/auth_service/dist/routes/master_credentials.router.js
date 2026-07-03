"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MasterCredentialsService_1 = require("../services/cpanels/master_credentials/MasterCredentialsService");
const MasterCredentialsRoutes = async (app) => {
    const controller = new MasterCredentialsService_1.MasterCredentialsService();
    app.get('/master_credentials', async (request, reply) => {
        return await reply.send(controller.listMasterCredentials(app, request));
    });
    app.post('/master_credentials', async (request, reply) => {
        return await reply.send(controller.createMasterCredential(app, request.body, request));
    });
    app.get('/master_credentials/:id', async (request, reply) => {
        return await reply.send(controller.getMasterCredentialsById(app, request));
    });
    app.put('/master_credentials/:id', async (request, reply) => {
        return await reply.send(controller.updateMasterCredential(app, request.body, request));
    });
    app.delete('/master_credentials/:id', async (request, reply) => {
        return await reply.send(controller.deleteMasterCredential(app, request));
    });
};
exports.default = MasterCredentialsRoutes;
