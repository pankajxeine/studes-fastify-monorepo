import type { FastifyPluginAsync } from 'fastify'
import { InstituteAuditLogsService } from '../services/cpanels/institute_audit_logs/InstituteAuditLogsService'

const InstituteAuditLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstituteAuditLogsService()
  app.get('/institute_audit_logs', async (request, reply) => {
     return await reply.send(controller.listInstituteAuditLogs(app, request))
  })
  app.post('/institute_audit_logs', async (request, reply) => {
     return await reply.send(controller.createInstituteAuditLog(app, request.body as any, request))
  })
  app.get('/institute_audit_logs/:id', async (request, reply) => {
     return await reply.send(controller.getInstituteAuditLogsById(app, request))
  })
  app.put('/institute_audit_logs/:id', async (request, reply) => {
     return await reply.send(controller.updateInstituteAuditLog(app, request.body as any, request))
  })
  app.delete('/institute_audit_logs/:id', async (request, reply) => {
      await controller.deleteInstituteAuditLog(app, request) 

             reply.code(201) 
          
  })
}

export default InstituteAuditLogsRoutes
