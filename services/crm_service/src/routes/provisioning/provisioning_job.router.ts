import type { FastifyPluginAsync } from 'fastify'
import { ProvisioningJobService } from '../../services/provisioning/provisioning_job/ProvisioningJobService'

const ProvisioningJobRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ProvisioningJobService()

  app.get('/provisioning_job', { config: {"adminPermission":"provisioning.provisioning_job.read"} }, async (request, reply) => {
    const result = await controller.listProvisioningJob(app, request)
    return reply.send(result)
  })
  app.post('/provisioning_job', { config: {"adminPermission":"provisioning.provisioning_job.create"} }, async (request, reply) => {
    const result = await controller.createProvisioningJob(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/provisioning_job/:job_id', { config: {"adminPermission":"provisioning.provisioning_job.read"} }, async (request, reply) => {
    const result = await controller.getProvisioningJobById(app, request)
    return reply.send(result)
  })
  app.put('/provisioning_job/:job_id', { config: {"adminPermission":"provisioning.provisioning_job.update"} }, async (request, reply) => {
    const result = await controller.updateProvisioningJob(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/provisioning_job/:job_id', { config: {"adminPermission":"provisioning.provisioning_job.delete"} }, async (request, reply) => {
    const result = await controller.deleteProvisioningJob(app, request)
    return reply.send(result)
  })
}

export default ProvisioningJobRoutes
