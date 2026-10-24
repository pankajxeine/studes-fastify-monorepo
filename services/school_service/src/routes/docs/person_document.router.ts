import type { FastifyPluginAsync } from 'fastify'
import { PersonDocumentService } from '../../services/docs/person_document/PersonDocumentService'

const PersonDocumentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PersonDocumentService()

  app.get('/person_document', async (request, reply) => {
    const result = await controller.listPersonDocument(app, request)
    return reply.send(result)
  })
  app.post('/person_document', async (request, reply) => {
    const result = await controller.createPersonDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/person_document/:id', async (request, reply) => {
    const result = await controller.getPersonDocumentById(app, request)
    return reply.send(result)
  })
  app.put('/person_document/:id', async (request, reply) => {
    const result = await controller.updatePersonDocument(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/person_document/:id', async (request, reply) => {
    const result = await controller.deletePersonDocument(app, request)
    return reply.send(result)
  })
}

export default PersonDocumentRoutes
