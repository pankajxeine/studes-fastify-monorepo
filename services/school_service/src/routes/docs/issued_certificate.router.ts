import type { FastifyPluginAsync } from 'fastify'
import { IssuedCertificateService } from '../../services/docs/issued_certificate/IssuedCertificateService'

const IssuedCertificateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IssuedCertificateService()

  app.get('/issued_certificate', async (request, reply) => {
    const result = await controller.listIssuedCertificate(app, request)
    return reply.send(result)
  })
  app.post('/issued_certificate', async (request, reply) => {
    const result = await controller.createIssuedCertificate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/issued_certificate/:id', async (request, reply) => {
    const result = await controller.getIssuedCertificateById(app, request)
    return reply.send(result)
  })
  app.put('/issued_certificate/:id', async (request, reply) => {
    const result = await controller.updateIssuedCertificate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/issued_certificate/:id', async (request, reply) => {
    const result = await controller.deleteIssuedCertificate(app, request)
    return reply.send(result)
  })
}

export default IssuedCertificateRoutes
