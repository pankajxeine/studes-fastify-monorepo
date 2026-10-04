import type { ServiceTicketTypesRequest } from './types/ServiceTicketTypesRequest'
import type { ServiceTicketTypesResponse } from './types/ServiceTicketTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ServiceTicketTypesController {
  listServiceTicketTypes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketTypesResponse[]>>>
  createServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse>
  getServiceTicketTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse>
  updateServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse>
  deleteServiceTicketType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
