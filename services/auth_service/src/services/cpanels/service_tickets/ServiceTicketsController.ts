import type { ServiceTicketsRequest } from './types/ServiceTicketsRequest'
import type { ServiceTicketsResponse } from './types/ServiceTicketsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface ServiceTicketsController {
  listServiceTickets(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketsResponse[]>
  createServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse>
  getServiceTicketsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketsResponse>
  updateServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse>
  deleteServiceTicket(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
