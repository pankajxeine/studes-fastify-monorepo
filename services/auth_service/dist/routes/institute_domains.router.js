"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstituteDomainsService_1 = require("../services/cpanels/institute_domains/InstituteDomainsService");
const InstituteDomainsRoutes = async (app) => {
    const controller = new InstituteDomainsService_1.InstituteDomainsService();
    app.get('/institute_domains', async (request, reply) => {
        return await reply.send(controller.listInstituteDomains(app, request));
    });
    app.post('/institute_domains', async (request, reply) => {
        return await reply.send(controller.createInstituteDomain(app, request.body, request));
    });
    app.get('/institute_domains/:id', async (request, reply) => {
        return await reply.send(controller.getInstituteDomainsById(app, request));
    });
    app.put('/institute_domains/:id', async (request, reply) => {
        return await reply.send(controller.updateInstituteDomain(app, request.body, request));
    });
    app.delete('/institute_domains/:id', async (request, reply) => {
        return await reply.send(controller.deleteInstituteDomain(app, request));
    });
};
exports.default = InstituteDomainsRoutes;
