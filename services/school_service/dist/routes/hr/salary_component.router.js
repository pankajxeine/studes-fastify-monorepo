"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalaryComponentService_1 = require("../../services/hr/salary_component/SalaryComponentService");
const SalaryComponentRoutes = async (app) => {
    const controller = new SalaryComponentService_1.SalaryComponentService();
    app.get('/salary_component', async (request, reply) => {
        const result = await controller.listSalaryComponent(app, request);
        return reply.send(result);
    });
    app.post('/salary_component', async (request, reply) => {
        const result = await controller.createSalaryComponent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/salary_component/:id', async (request, reply) => {
        const result = await controller.getSalaryComponentById(app, request);
        return reply.send(result);
    });
    app.put('/salary_component/:id', async (request, reply) => {
        const result = await controller.updateSalaryComponent(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/salary_component/:id', async (request, reply) => {
        const result = await controller.deleteSalaryComponent(app, request);
        return reply.send(result);
    });
};
exports.default = SalaryComponentRoutes;
