import type { FastifyPluginAsync } from 'fastify'
import { LanguagesService } from '../services/cpanels/languages/LanguagesService'

const LanguagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LanguagesService()

  app.get('/languages', async (request, reply) => {
    const result = await controller.listLanguages(app, request)
    return reply.send(result)
  })
  app.post('/languages', async (request, reply) => {
    const result = await controller.createLanguage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/languages/:id', async (request, reply) => {
    const result = await controller.getLanguagesById(app, request)
    return reply.send(result)
  })
  app.put('/languages/:id', async (request, reply) => {
    const result = await controller.updateLanguage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/languages/:id', async (request, reply) => {
    const result = await controller.deleteLanguage(app, request)
    return reply.send(result)
  })
}

export default LanguagesRoutes
