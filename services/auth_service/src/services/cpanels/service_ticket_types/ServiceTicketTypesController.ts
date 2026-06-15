import type { ServiceTicketTypesRequest } from './types/ServiceTicketTypesRequest'
import type { ServiceTicketTypesResponse } from './types/ServiceTicketTypesResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface ServiceTicketTypesController {
  listServiceTicketTypes(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse[]>
  createServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse>
  getServiceTicketTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse>
  updateServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse>
  deleteServiceTicketType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
