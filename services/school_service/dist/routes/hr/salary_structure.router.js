"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalaryStructureService_1 = require("../../services/hr/salary_structure/SalaryStructureService");
const SalaryStructureRoutes = async (app) => {
    const controller = new SalaryStructureService_1.SalaryStructureService();
    app.get('/salary_structure', async (request, reply) => {
        const result = await controller.listSalaryStructure(app, request);
        return reply.send(result);
    });
    app.post('/salary_structure', async (request, reply) => {
        const result = await controller.createSalaryStructure(app, request.body, request);
        return reply.send(result);
    });
    app.get('/salary_structure/:id', async (request, reply) => {
        const result = await controller.getSalaryStructureById(app, request);
        return reply.send(result);
    });
    app.put('/salary_structure/:id', async (request, reply) => {
        const result = await controller.updateSalaryStructure(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/salary_structure/:id', async (request, reply) => {
        const result = await controller.deleteSalaryStructure(app, request);
        return reply.send(result);
    });
};
exports.default = SalaryStructureRoutes;
