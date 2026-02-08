import type { FastifyPluginAsync } from 'fastify'
import { ExamsService } from '../services/ExamsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const ExamsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExamsService()
  app.get('/exams', async (request, reply) => {
    return await controller.listExams(buildHeaders(request))
  })
  app.post('/exams', async (request, reply) => {
    return await controller.createExam(request.body as any, buildHeaders(request))
  })
  app.post('/exams/:id/results', async (request, reply) => {
    return await controller.recordExamResult(request.body as any, buildHeaders(request))
  })
}

export default ExamsRoutes
