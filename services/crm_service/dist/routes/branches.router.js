"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BranchesService_1 = require("../services/branches/BranchesService");
const BranchesRoutes = async (app) => {
    const controller = new BranchesService_1.BranchesService();
    app.get('/branches', async (request, reply) => {
        const result = await controller.listBranches(app, request);
        return reply.send(result);
    });
    app.post('/branches', async (request, reply) => {
        const result = await controller.createBranch(app, request.body, request);
        return reply.send(result);
    });
    app.patch('/branches/:branchId', async (request, reply) => {
        const result = await controller.updateBranch(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = BranchesRoutes;
