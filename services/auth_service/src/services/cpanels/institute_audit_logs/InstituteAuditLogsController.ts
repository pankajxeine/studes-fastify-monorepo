import type { InstituteAuditLogsRequest } from './types/InstituteAuditLogsRequest'
import type { InstituteAuditLogsResponse } from './types/InstituteAuditLogsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface InstituteAuditLogsController {
  listInstituteAuditLogs(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteAuditLogsResponse[]>
  createInstituteAuditLog(app: FastifyInstance, input: InstituteAuditLogsRequest, request?: FastifyRequest): Promise<InstituteAuditLogsResponse>
  getInstituteAuditLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteAuditLogsResponse>
  updateInstituteAuditLog(app: FastifyInstance, input: InstituteAuditLogsRequest, request?: FastifyRequest): Promise<InstituteAuditLogsResponse>
  deleteInstituteAuditLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
