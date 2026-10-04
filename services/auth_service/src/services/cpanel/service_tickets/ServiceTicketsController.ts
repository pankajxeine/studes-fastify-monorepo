import type { ServiceTicketsRequest } from './types/ServiceTicketsRequest'
import type { ServiceTicketsResponse } from './types/ServiceTicketsResponse'
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

export interface ServiceTicketsController {
  listServiceTickets(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketsResponse[]>>>
  createServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse>
  getServiceTicketsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketsResponse>
  updateServiceTicket(app: FastifyInstance, input: ServiceTicketsRequest, request?: FastifyRequest): Promise<ServiceTicketsResponse>
  deleteServiceTicket(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
