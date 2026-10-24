import type { FastifyPluginAsync } from 'fastify'
import { KbArticleService } from '../../services/support/kb_article/KbArticleService'

const KbArticleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new KbArticleService()

  app.get('/kb_article', async (request, reply) => {
    const result = await controller.listKbArticle(app, request)
    return reply.send(result)
  })
  app.post('/kb_article', async (request, reply) => {
    const result = await controller.createKbArticle(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/kb_article/:id', async (request, reply) => {
    const result = await controller.getKbArticleById(app, request)
    return reply.send(result)
  })
  app.put('/kb_article/:id', async (request, reply) => {
    const result = await controller.updateKbArticle(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/kb_article/:id', async (request, reply) => {
    const result = await controller.deleteKbArticle(app, request)
    return reply.send(result)
  })
}

export default KbArticleRoutes
