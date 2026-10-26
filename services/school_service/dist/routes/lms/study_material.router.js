"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudyMaterialService_1 = require("../../services/lms/study_material/StudyMaterialService");
const StudyMaterialRoutes = async (app) => {
    const controller = new StudyMaterialService_1.StudyMaterialService();
    app.get('/study_material', async (request, reply) => {
        const result = await controller.listStudyMaterial(app, request);
        return reply.send(result);
    });
    app.post('/study_material', async (request, reply) => {
        const result = await controller.createStudyMaterial(app, request.body, request);
        return reply.send(result);
    });
    app.get('/study_material/:id', async (request, reply) => {
        const result = await controller.getStudyMaterialById(app, request);
        return reply.send(result);
    });
    app.put('/study_material/:id', async (request, reply) => {
        const result = await controller.updateStudyMaterial(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/study_material/:id', async (request, reply) => {
        const result = await controller.deleteStudyMaterial(app, request);
        return reply.send(result);
    });
};
exports.default = StudyMaterialRoutes;
