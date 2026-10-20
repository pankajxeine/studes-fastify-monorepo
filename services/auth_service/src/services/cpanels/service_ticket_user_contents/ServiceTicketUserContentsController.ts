import type { ServiceTicketUserContentsRequest } from './types/ServiceTicketUserContentsRequest'
import type { ServiceTicketUserContentsResponse } from './types/ServiceTicketUserContentsResponse'
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

export interface ServiceTicketUserContentsController {
  listServiceTicketUserContents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketUserContentsResponse[]>>>
  createServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse>
  getServiceTicketUserContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse>
  updateServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse>
  deleteServiceTicketUserContent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
