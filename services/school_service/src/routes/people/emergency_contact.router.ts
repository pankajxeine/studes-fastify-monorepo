import type { FastifyPluginAsync } from 'fastify'
import { EmergencyContactService } from '../../services/people/emergency_contact/EmergencyContactService'

const EmergencyContactRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EmergencyContactService()

  app.get('/emergency_contact', async (request, reply) => {
    const result = await controller.listEmergencyContact(app, request)
    return reply.send(result)
  })
  app.post('/emergency_contact', async (request, reply) => {
    const result = await controller.createEmergencyContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/emergency_contact/:id', async (request, reply) => {
    const result = await controller.getEmergencyContactById(app, request)
    return reply.send(result)
  })
  app.put('/emergency_contact/:id', async (request, reply) => {
    const result = await controller.updateEmergencyContact(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/emergency_contact/:id', async (request, reply) => {
    const result = await controller.deleteEmergencyContact(app, request)
    return reply.send(result)
  })
}

export default EmergencyContactRoutes
