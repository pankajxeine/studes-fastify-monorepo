import { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'

const messageSchema = z.object({
  channel: z.enum(['email', 'sms', 'push']),
  recipient: z.string().min(3),
  message: z.string().min(2)
})

const notificationRoutes: FastifyPluginAsync = async (app) => {
  app.get('/notifications', async (request) => {
    const result = await request.db!.query(
      'select id, channel, recipient, message, created_at from notifications order by created_at desc'
    )
    return { items: result.rows }
  })

  app.post('/notifications', async (request, reply) => {
    const body = messageSchema.parse(request.body)
    const result = await request.db!.query(
      'insert into notifications (channel, recipient, message) values ($1, $2, $3) returning id, channel, recipient, message, created_at',
      [body.channel, body.recipient, body.message]
    )

    reply.code(201)
    return result.rows[0]
  })
}

export default notificationRoutes
