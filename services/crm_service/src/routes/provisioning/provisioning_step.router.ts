import type { FastifyPluginAsync } from 'fastify'
import { ProvisioningStepService } from '../../services/provisioning/provisioning_step/ProvisioningStepService'

const ProvisioningStepRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ProvisioningStepService()

  app.get('/provisioning_step', { config: {"adminPermission":"provisioning.provisioning_step.read"} }, async (request, reply) => {
    const result = await controller.listProvisioningStep(app, request)
    return reply.send(result)
  })
  app.post('/provisioning_step', { config: {"adminPermission":"provisioning.provisioning_step.create"} }, async (request, reply) => {
    const result = await controller.createProvisioningStep(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/provisioning_step/:provisioning_step_id', { config: {"adminPermission":"provisioning.provisioning_step.read"} }, async (request, reply) => {
    const result = await controller.getProvisioningStepById(app, request)
    return reply.send(result)
  })
  app.put('/provisioning_step/:provisioning_step_id', { config: {"adminPermission":"provisioning.provisioning_step.update"} }, async (request, reply) => {
    const result = await controller.updateProvisioningStep(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/provisioning_step/:provisioning_step_id', { config: {"adminPermission":"provisioning.provisioning_step.delete"} }, async (request, reply) => {
    const result = await controller.deleteProvisioningStep(app, request)
    return reply.send(result)
  })
}

export default ProvisioningStepRoutes
