import type { FastifyPluginAsync } from 'fastify'
import { AccountService } from '../../services/crm/account/AccountService'

const AccountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AccountService()

  app.get('/account', async (request, reply) => {
    const result = await controller.listAccount(app, request)
    return reply.send(result)
  })
  app.post('/account', async (request, reply) => {
    const result = await controller.createAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/account/:id', async (request, reply) => {
    const result = await controller.getAccountById(app, request)
    return reply.send(result)
  })
  app.put('/account/:id', async (request, reply) => {
    const result = await controller.updateAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/account/:id', async (request, reply) => {
    const result = await controller.deleteAccount(app, request)
    return reply.send(result)
  })
}

export default AccountRoutes
