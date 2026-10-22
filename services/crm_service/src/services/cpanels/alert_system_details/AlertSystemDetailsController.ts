import type { AlertSystemDetailsRequest } from './types/AlertSystemDetailsRequest'
import type { AlertSystemDetailsResponse } from './types/AlertSystemDetailsResponse'
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

export interface AlertSystemDetailsController {
  listAlertSystemDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlertSystemDetailsResponse[]>>>
  createAlertSystemDetail(app: FastifyInstance, input: AlertSystemDetailsRequest, request?: FastifyRequest): Promise<AlertSystemDetailsResponse>
  getAlertSystemDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<AlertSystemDetailsResponse>
  updateAlertSystemDetail(app: FastifyInstance, input: AlertSystemDetailsRequest, request?: FastifyRequest): Promise<AlertSystemDetailsResponse>
  deleteAlertSystemDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
