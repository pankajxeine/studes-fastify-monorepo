import type { FastifyPluginAsync } from 'fastify'
import { AccountService } from '../../services/crm/account/AccountService'

const AccountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AccountService()

  app.get('/account', { config: {"adminPermission":"crm.account.read"} }, async (request, reply) => {
    const result = await controller.listAccount(app, request)
    return reply.send(result)
  })
  app.post('/account', { config: {"adminPermission":"crm.account.create"} }, async (request, reply) => {
    const result = await controller.createAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/account/:account_id', { config: {"adminPermission":"crm.account.read"} }, async (request, reply) => {
    const result = await controller.getAccountById(app, request)
    return reply.send(result)
  })
  app.put('/account/:account_id', { config: {"adminPermission":"crm.account.update"} }, async (request, reply) => {
    const result = await controller.updateAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/account/:account_id', { config: {"adminPermission":"crm.account.delete"} }, async (request, reply) => {
    const result = await controller.deleteAccount(app, request)
    return reply.send(result)
  })
}

export default AccountRoutes
