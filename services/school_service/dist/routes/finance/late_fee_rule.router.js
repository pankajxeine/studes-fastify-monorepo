"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LateFeeRuleService_1 = require("../../services/finance/late_fee_rule/LateFeeRuleService");
const LateFeeRuleRoutes = async (app) => {
    const controller = new LateFeeRuleService_1.LateFeeRuleService();
    app.get('/late_fee_rule', async (request, reply) => {
        const result = await controller.listLateFeeRule(app, request);
        return reply.send(result);
    });
    app.post('/late_fee_rule', async (request, reply) => {
        const result = await controller.createLateFeeRule(app, request.body, request);
        return reply.send(result);
    });
    app.get('/late_fee_rule/:id', async (request, reply) => {
        const result = await controller.getLateFeeRuleById(app, request);
        return reply.send(result);
    });
    app.put('/late_fee_rule/:id', async (request, reply) => {
        const result = await controller.updateLateFeeRule(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/late_fee_rule/:id', async (request, reply) => {
        const result = await controller.deleteLateFeeRule(app, request);
        return reply.send(result);
    });
};
exports.default = LateFeeRuleRoutes;
