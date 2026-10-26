"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LibraryMembershipService_1 = require("../../services/library/library_membership/LibraryMembershipService");
const LibraryMembershipRoutes = async (app) => {
    const controller = new LibraryMembershipService_1.LibraryMembershipService();
    app.get('/library_membership', async (request, reply) => {
        const result = await controller.listLibraryMembership(app, request);
        return reply.send(result);
    });
    app.post('/library_membership', async (request, reply) => {
        const result = await controller.createLibraryMembership(app, request.body, request);
        return reply.send(result);
    });
    app.get('/library_membership/:id', async (request, reply) => {
        const result = await controller.getLibraryMembershipById(app, request);
        return reply.send(result);
    });
    app.put('/library_membership/:id', async (request, reply) => {
        const result = await controller.updateLibraryMembership(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/library_membership/:id', async (request, reply) => {
        const result = await controller.deleteLibraryMembership(app, request);
        return reply.send(result);
    });
};
exports.default = LibraryMembershipRoutes;
