import type { FastifyPluginAsync } from 'fastify'
import { InstituteAuditLogsService } from '../services/cpanels/institute_audit_logs/InstituteAuditLogsService'

const InstituteAuditLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstituteAuditLogsService()

  app.get('/institute_audit_logs', async (request, reply) => {
    const result = await controller.listInstituteAuditLogs(app, request)
    return reply.send(result)
  })
  app.post('/institute_audit_logs', async (request, reply) => {
    const result = await controller.createInstituteAuditLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/institute_audit_logs/:id', async (request, reply) => {
    const result = await controller.getInstituteAuditLogsById(app, request)
    return reply.send(result)
  })
  app.put('/institute_audit_logs/:id', async (request, reply) => {
    const result = await controller.updateInstituteAuditLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/institute_audit_logs/:id', async (request, reply) => {
    const result = await controller.deleteInstituteAuditLog(app, request)
    return reply.send(result)
  })
}

export default InstituteAuditLogsRoutes
