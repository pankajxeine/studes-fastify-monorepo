import type { ServiceTicketLogsRequest } from './types/ServiceTicketLogsRequest'
import type { ServiceTicketLogsResponse } from './types/ServiceTicketLogsResponse'
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

export interface ServiceTicketLogsController {
  listServiceTicketLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ServiceTicketLogsResponse[]>>>
  createServiceTicketLog(app: FastifyInstance, input: ServiceTicketLogsRequest, request?: FastifyRequest): Promise<ServiceTicketLogsResponse>
  getServiceTicketLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketLogsResponse>
  updateServiceTicketLog(app: FastifyInstance, input: ServiceTicketLogsRequest, request?: FastifyRequest): Promise<ServiceTicketLogsResponse>
  deleteServiceTicketLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
