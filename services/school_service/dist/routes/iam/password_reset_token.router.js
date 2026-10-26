"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PasswordResetTokenService_1 = require("../../services/iam/password_reset_token/PasswordResetTokenService");
const PasswordResetTokenRoutes = async (app) => {
    const controller = new PasswordResetTokenService_1.PasswordResetTokenService();
    app.get('/password_reset_token', async (request, reply) => {
        const result = await controller.listPasswordResetToken(app, request);
        return reply.send(result);
    });
    app.post('/password_reset_token', async (request, reply) => {
        const result = await controller.createPasswordResetToken(app, request.body, request);
        return reply.send(result);
    });
    app.get('/password_reset_token/:id', async (request, reply) => {
        const result = await controller.getPasswordResetTokenById(app, request);
        return reply.send(result);
    });
    app.put('/password_reset_token/:id', async (request, reply) => {
        const result = await controller.updatePasswordResetToken(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/password_reset_token/:id', async (request, reply) => {
        const result = await controller.deletePasswordResetToken(app, request);
        return reply.send(result);
    });
};
exports.default = PasswordResetTokenRoutes;
