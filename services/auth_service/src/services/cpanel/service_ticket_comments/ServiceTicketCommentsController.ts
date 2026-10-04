import type { ServiceTicketCommentsRequest } from './types/ServiceTicketCommentsRequest'
import type { ServiceTicketCommentsResponse } from './types/ServiceTicketCommentsResponse'
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

export interface ServiceTicketCommentsController {
  listServiceTicketComments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketCommentsResponse[]>>>
  createServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse>
  getServiceTicketCommentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse>
  updateServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse>
  deleteServiceTicketComment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
