"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CertificateTemplateService_1 = require("../../services/docs/certificate_template/CertificateTemplateService");
const CertificateTemplateRoutes = async (app) => {
    const controller = new CertificateTemplateService_1.CertificateTemplateService();
    app.get('/certificate_template', async (request, reply) => {
        const result = await controller.listCertificateTemplate(app, request);
        return reply.send(result);
    });
    app.post('/certificate_template', async (request, reply) => {
        const result = await controller.createCertificateTemplate(app, request.body, request);
        return reply.send(result);
    });
    app.get('/certificate_template/:id', async (request, reply) => {
        const result = await controller.getCertificateTemplateById(app, request);
        return reply.send(result);
    });
    app.put('/certificate_template/:id', async (request, reply) => {
        const result = await controller.updateCertificateTemplate(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/certificate_template/:id', async (request, reply) => {
        const result = await controller.deleteCertificateTemplate(app, request);
        return reply.send(result);
    });
};
exports.default = CertificateTemplateRoutes;
