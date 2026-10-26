import type { FastifyPluginAsync } from 'fastify'
import { StateTransitionService } from '../../services/sys/state_transition/StateTransitionService'

const StateTransitionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StateTransitionService()

  app.get('/state_transition', { config: {"adminPermission":"sys.state_transition.read"} }, async (request, reply) => {
    const result = await controller.listStateTransition(app, request)
    return reply.send(result)
  })
  app.post('/state_transition', { config: {"adminPermission":"sys.state_transition.create"} }, async (request, reply) => {
    const result = await controller.createStateTransition(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/state_transition/:state_transition_id', { config: {"adminPermission":"sys.state_transition.read"} }, async (request, reply) => {
    const result = await controller.getStateTransitionById(app, request)
    return reply.send(result)
  })
  app.put('/state_transition/:state_transition_id', { config: {"adminPermission":"sys.state_transition.update"} }, async (request, reply) => {
    const result = await controller.updateStateTransition(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/state_transition/:state_transition_id', { config: {"adminPermission":"sys.state_transition.delete"} }, async (request, reply) => {
    const result = await controller.deleteStateTransition(app, request)
    return reply.send(result)
  })
}

export default StateTransitionRoutes
