import type { FastifyPluginAsync } from 'fastify'
import { DocumentTypesService } from '../services/cpanels/document_types/DocumentTypesService'

const DocumentTypesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DocumentTypesService()

  app.get('/document_types', async (request, reply) => {
    const result = await controller.listDocumentTypes(app, request)
    return reply.send(result)
  })
  app.post('/document_types', async (request, reply) => {
    const result = await controller.createDocumentType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/document_types/:id', async (request, reply) => {
    const result = await controller.getDocumentTypesById(app, request)
    return reply.send(result)
  })
  app.put('/document_types/:id', async (request, reply) => {
    const result = await controller.updateDocumentType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/document_types/:id', async (request, reply) => {
    const result = await controller.deleteDocumentType(app, request)
    return reply.send(result)
  })
}

export default DocumentTypesRoutes
