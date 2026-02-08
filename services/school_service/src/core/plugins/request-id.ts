import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import crypto from 'node:crypto'

export default fp(async (app: FastifyInstance) => {
  app.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    const incoming = (request.headers['x-request-id'] as string | undefined) ?? ''
    const id = incoming.trim() || crypto.randomUUID()

    request.headers['x-request-id'] = id
    reply.header('x-request-id', id)
    request.log = request.log.child({ requestId: id })
  })
})
