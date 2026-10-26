"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalaryStructureComponentService_1 = require("../../services/hr/salary_structure_component/SalaryStructureComponentService");
const SalaryStructureComponentRoutes = async (app) => {
    const controller = new SalaryStructureComponentService_1.SalaryStructureComponentService();
    app.get('/salary_structure_component', async (request, reply) => {
        const result = await controller.listSalaryStructureComponent(app, request);
        return reply.send(result);
    });
    app.post('/salary_structure_component', async (request, reply) => {
        const result = await controller.createSalaryStructureComponent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/salary_structure_component/:id', async (request, reply) => {
        const result = await controller.getSalaryStructureComponentById(app, request);
        return reply.send(result);
    });
    app.put('/salary_structure_component/:id', async (request, reply) => {
        const result = await controller.updateSalaryStructureComponent(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/salary_structure_component/:id', async (request, reply) => {
        const result = await controller.deleteSalaryStructureComponent(app, request);
        return reply.send(result);
    });
};
exports.default = SalaryStructureComponentRoutes;
