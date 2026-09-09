"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const messageSchema = zod_1.z.object({
    channel: zod_1.z.enum(['email', 'sms', 'push']),
    recipient: zod_1.z.string().min(3),
    message: zod_1.z.string().min(2)
});
const notificationRoutes = async (app) => {
    app.get('/notifications', async (request) => {
        const result = await request.db.query('select id, channel, recipient, message, created_at from notifications order by created_at desc');
        return { items: result.rows };
    });
    app.post('/notifications', async (request, reply) => {
        const body = messageSchema.parse(request.body);
        const result = await request.db.query('insert into notifications (channel, recipient, message) values ($1, $2, $3) returning id, channel, recipient, message, created_at', [body.channel, body.recipient, body.message]);
        reply.code(201);
        return result.rows[0];
    });
};
exports.default = notificationRoutes;
