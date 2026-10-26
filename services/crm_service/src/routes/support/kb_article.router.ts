import type { FastifyPluginAsync } from 'fastify'
import { KbArticleService } from '../../services/support/kb_article/KbArticleService'

const KbArticleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new KbArticleService()

  app.get('/kb_article', { config: {"adminPermission":"support.kb_article.read"} }, async (request, reply) => {
    const result = await controller.listKbArticle(app, request)
    return reply.send(result)
  })
  app.post('/kb_article', { config: {"adminPermission":"support.kb_article.create"} }, async (request, reply) => {
    const result = await controller.createKbArticle(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/kb_article/:kb_article_id', { config: {"adminPermission":"support.kb_article.read"} }, async (request, reply) => {
    const result = await controller.getKbArticleById(app, request)
    return reply.send(result)
  })
  app.put('/kb_article/:kb_article_id', { config: {"adminPermission":"support.kb_article.update"} }, async (request, reply) => {
    const result = await controller.updateKbArticle(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/kb_article/:kb_article_id', { config: {"adminPermission":"support.kb_article.delete"} }, async (request, reply) => {
    const result = await controller.deleteKbArticle(app, request)
    return reply.send(result)
  })
}

export default KbArticleRoutes
