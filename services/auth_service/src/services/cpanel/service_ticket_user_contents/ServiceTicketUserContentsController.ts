import type { ServiceTicketUserContentsRequest } from './types/ServiceTicketUserContentsRequest'
import type { ServiceTicketUserContentsResponse } from './types/ServiceTicketUserContentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface ServiceTicketUserContentsController {
  listServiceTicketUserContents(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse[]>
  createServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse>
  getServiceTicketUserContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse>
  updateServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse>
  deleteServiceTicketUserContent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
