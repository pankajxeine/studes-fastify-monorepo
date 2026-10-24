import type { FastifyPluginAsync } from 'fastify'
import { CertificateTemplateService } from '../../services/docs/certificate_template/CertificateTemplateService'

const CertificateTemplateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CertificateTemplateService()

  app.get('/certificate_template', async (request, reply) => {
    const result = await controller.listCertificateTemplate(app, request)
    return reply.send(result)
  })
  app.post('/certificate_template', async (request, reply) => {
    const result = await controller.createCertificateTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/certificate_template/:id', async (request, reply) => {
    const result = await controller.getCertificateTemplateById(app, request)
    return reply.send(result)
  })
  app.put('/certificate_template/:id', async (request, reply) => {
    const result = await controller.updateCertificateTemplate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/certificate_template/:id', async (request, reply) => {
    const result = await controller.deleteCertificateTemplate(app, request)
    return reply.send(result)
  })
}

export default CertificateTemplateRoutes
