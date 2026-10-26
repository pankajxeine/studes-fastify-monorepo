"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisciplinaryActionService_1 = require("../../services/discipline/disciplinary_action/DisciplinaryActionService");
const DisciplinaryActionRoutes = async (app) => {
    const controller = new DisciplinaryActionService_1.DisciplinaryActionService();
    app.get('/disciplinary_action', async (request, reply) => {
        const result = await controller.listDisciplinaryAction(app, request);
        return reply.send(result);
    });
    app.post('/disciplinary_action', async (request, reply) => {
        const result = await controller.createDisciplinaryAction(app, request.body, request);
        return reply.send(result);
    });
    app.get('/disciplinary_action/:id', async (request, reply) => {
        const result = await controller.getDisciplinaryActionById(app, request);
        return reply.send(result);
    });
    app.put('/disciplinary_action/:id', async (request, reply) => {
        const result = await controller.updateDisciplinaryAction(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/disciplinary_action/:id', async (request, reply) => {
        const result = await controller.deleteDisciplinaryAction(app, request);
        return reply.send(result);
    });
};
exports.default = DisciplinaryActionRoutes;
