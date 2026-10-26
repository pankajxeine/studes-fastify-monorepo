"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubstitutionService_1 = require("../../services/timetable/substitution/SubstitutionService");
const SubstitutionRoutes = async (app) => {
    const controller = new SubstitutionService_1.SubstitutionService();
    app.get('/substitution', async (request, reply) => {
        const result = await controller.listSubstitution(app, request);
        return reply.send(result);
    });
    app.post('/substitution', async (request, reply) => {
        const result = await controller.createSubstitution(app, request.body, request);
        return reply.send(result);
    });
    app.get('/substitution/:id', async (request, reply) => {
        const result = await controller.getSubstitutionById(app, request);
        return reply.send(result);
    });
    app.put('/substitution/:id', async (request, reply) => {
        const result = await controller.updateSubstitution(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/substitution/:id', async (request, reply) => {
        const result = await controller.deleteSubstitution(app, request);
        return reply.send(result);
    });
};
exports.default = SubstitutionRoutes;
