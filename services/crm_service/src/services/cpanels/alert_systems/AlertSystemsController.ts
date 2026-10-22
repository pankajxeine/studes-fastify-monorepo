import type { AlertSystemsRequest } from './types/AlertSystemsRequest'
import type { AlertSystemsResponse } from './types/AlertSystemsResponse'
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

export interface AlertSystemsController {
  listAlertSystems(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlertSystemsResponse[]>>>
  createAlertSystem(app: FastifyInstance, input: AlertSystemsRequest, request?: FastifyRequest): Promise<AlertSystemsResponse>
  getAlertSystemsById(app: FastifyInstance, request?: FastifyRequest): Promise<AlertSystemsResponse>
  updateAlertSystem(app: FastifyInstance, input: AlertSystemsRequest, request?: FastifyRequest): Promise<AlertSystemsResponse>
  deleteAlertSystem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
