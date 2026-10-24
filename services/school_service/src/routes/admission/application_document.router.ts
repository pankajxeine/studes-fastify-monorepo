import type { FastifyPluginAsync } from 'fastify'
import { ApplicationDocumentService } from '../../services/admission/application_document/ApplicationDocumentService'

const ApplicationDocumentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApplicationDocumentService()

  app.get('/application_document', async (request, reply) => {
    const result = await controller.listApplicationDocument(app, request)
    return reply.send(result)
  })
  app.post('/application_document', async (request, reply) => {
    const result = await controller.createApplicationDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/application_document/:id', async (request, reply) => {
    const result = await controller.getApplicationDocumentById(app, request)
    return reply.send(result)
  })
  app.put('/application_document/:id', async (request, reply) => {
    const result = await controller.updateApplicationDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/application_document/:id', async (request, reply) => {
    const result = await controller.deleteApplicationDocument(app, request)
    return reply.send(result)
  })
}

export default ApplicationDocumentRoutes
