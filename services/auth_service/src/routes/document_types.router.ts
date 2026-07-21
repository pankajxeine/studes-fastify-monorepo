import type { FastifyPluginAsync } from 'fastify'
import { DocumentTypesService } from '../services/cpanel/document_types/DocumentTypesService'

const DocumentTypesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DocumentTypesService()

  app.get('/document_types', async (request, reply) => {

    return await reply.send(controller.listDocumentTypes(app, request))
  })
  app.post('/document_types', async (request, reply) => {
    return await reply.send(controller.createDocumentType(app, request.body as any, request))
  })
  app.get('/document_types/:id', async (request, reply) => {

    return await reply.send(controller.getDocumentTypesById(app, request))
  })
  app.put('/document_types/:id', async (request, reply) => {
    return await reply.send(controller.updateDocumentType(app, request.body as any, request))
  })
  app.delete('/document_types/:id', async (request, reply) => {

    return await reply.send(controller.deleteDocumentType(app, request))
  })
}

export default DocumentTypesRoutes
