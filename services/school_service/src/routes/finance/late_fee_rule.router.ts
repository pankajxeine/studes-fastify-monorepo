import type { FastifyPluginAsync } from 'fastify'
import { LateFeeRuleService } from '../../services/finance/late_fee_rule/LateFeeRuleService'

const LateFeeRuleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LateFeeRuleService()

  app.get('/late_fee_rule', async (request, reply) => {
    const result = await controller.listLateFeeRule(app, request)
    return reply.send(result)
  })
  app.post('/late_fee_rule', async (request, reply) => {
    const result = await controller.createLateFeeRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/late_fee_rule/:id', async (request, reply) => {
    const result = await controller.getLateFeeRuleById(app, request)
    return reply.send(result)
  })
  app.put('/late_fee_rule/:id', async (request, reply) => {
    const result = await controller.updateLateFeeRule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/late_fee_rule/:id', async (request, reply) => {
    const result = await controller.deleteLateFeeRule(app, request)
    return reply.send(result)
  })
}

export default LateFeeRuleRoutes
