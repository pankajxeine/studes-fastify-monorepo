import type { FastifyPluginAsync } from 'fastify'
import { TimetableService } from '../services/TimetableService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const TimetableRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TimetableService()
  app.get('/timetable', async (request, reply) => {
    return await controller.listTimetable(buildHeaders(request))
  })
  app.post('/timetable', async (request, reply) => {
    return await controller.createTimetableEntry(request.body as any, buildHeaders(request))
  })
}

export default TimetableRoutes
