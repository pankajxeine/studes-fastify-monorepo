import type { ServiceTicketTypeLogsRequest } from './types/ServiceTicketTypeLogsRequest'
import type { ServiceTicketTypeLogsResponse } from './types/ServiceTicketTypeLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface ServiceTicketTypeLogsController {
  listServiceTicketTypeLogs(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse[]>
  createServiceTicketTypeLog(app: FastifyInstance, input: ServiceTicketTypeLogsRequest, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse>
  getServiceTicketTypeLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse>
  updateServiceTicketTypeLog(app: FastifyInstance, input: ServiceTicketTypeLogsRequest, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse>
  deleteServiceTicketTypeLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
