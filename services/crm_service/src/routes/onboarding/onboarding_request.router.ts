import type { FastifyPluginAsync } from 'fastify'
import { OnboardingRequestService } from '../../services/onboarding/onboarding_request/OnboardingRequestService'

const OnboardingRequestRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OnboardingRequestService()

  app.get('/onboarding_request', { config: {"adminPermission":"onboarding.onboarding_request.read"} }, async (request, reply) => {
    const result = await controller.listOnboardingRequest(app, request)
    return reply.send(result)
  })
  app.post('/onboarding_request', { config: {"adminPermission":"onboarding.onboarding_request.create"} }, async (request, reply) => {
    const result = await controller.createOnboardingRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/onboarding_request/:request_id', { config: {"adminPermission":"onboarding.onboarding_request.read"} }, async (request, reply) => {
    const result = await controller.getOnboardingRequestById(app, request)
    return reply.send(result)
  })
  app.put('/onboarding_request/:request_id', { config: {"adminPermission":"onboarding.onboarding_request.update"} }, async (request, reply) => {
    const result = await controller.updateOnboardingRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/onboarding_request/:request_id', { config: {"adminPermission":"onboarding.onboarding_request.delete"} }, async (request, reply) => {
    const result = await controller.deleteOnboardingRequest(app, request)
    return reply.send(result)
  })
}

export default OnboardingRequestRoutes
