import type { ServiceTicketCommentsRequest } from './types/ServiceTicketCommentsRequest'
import type { ServiceTicketCommentsResponse } from './types/ServiceTicketCommentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface ServiceTicketCommentsController {
  listServiceTicketComments(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse[]>
  createServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse>
  getServiceTicketCommentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse>
  updateServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse>
  deleteServiceTicketComment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
