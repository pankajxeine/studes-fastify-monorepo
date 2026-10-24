import type { FastifyPluginAsync } from 'fastify'
import { SectionService } from '../../services/academic/section/SectionService'

const SectionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SectionService()

  app.get('/section', async (request, reply) => {
    const result = await controller.listSection(app, request)
    return reply.send(result)
  })
  app.post('/section', async (request, reply) => {
    const result = await controller.createSection(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/section/:id', async (request, reply) => {
    const result = await controller.getSectionById(app, request)
    return reply.send(result)
  })
  app.put('/section/:id', async (request, reply) => {
    const result = await controller.updateSection(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/section/:id', async (request, reply) => {
    const result = await controller.deleteSection(app, request)
    return reply.send(result)
  })
}

export default SectionRoutes
