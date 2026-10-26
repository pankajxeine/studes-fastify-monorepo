import type { FastifyPluginAsync } from 'fastify'
import { JobStepTemplateService } from '../../services/provisioning/job_step_template/JobStepTemplateService'

const JobStepTemplateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new JobStepTemplateService()

  app.get('/job_step_template', { config: {"adminPermission":"provisioning.job_step_template.read"} }, async (request, reply) => {
    const result = await controller.listJobStepTemplate(app, request)
    return reply.send(result)
  })
  app.post('/job_step_template', { config: {"adminPermission":"provisioning.job_step_template.create"} }, async (request, reply) => {
    const result = await controller.createJobStepTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/job_step_template/:job_step_template_id', { config: {"adminPermission":"provisioning.job_step_template.read"} }, async (request, reply) => {
    const result = await controller.getJobStepTemplateById(app, request)
    return reply.send(result)
  })
  app.put('/job_step_template/:job_step_template_id', { config: {"adminPermission":"provisioning.job_step_template.update"} }, async (request, reply) => {
    const result = await controller.updateJobStepTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/job_step_template/:job_step_template_id', { config: {"adminPermission":"provisioning.job_step_template.delete"} }, async (request, reply) => {
    const result = await controller.deleteJobStepTemplate(app, request)
    return reply.send(result)
  })
}

export default JobStepTemplateRoutes
