import type { BusinessHoursRequest } from './types/BusinessHoursRequest'
import type { BusinessHoursResponse } from './types/BusinessHoursResponse'
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

export interface BusinessHoursController {
  listBusinessHours(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BusinessHoursResponse[]>>>
  createBusinessHour(app: FastifyInstance, input: BusinessHoursRequest, request?: FastifyRequest): Promise<BusinessHoursResponse>
  getBusinessHoursById(app: FastifyInstance, request?: FastifyRequest): Promise<BusinessHoursResponse>
  updateBusinessHour(app: FastifyInstance, input: BusinessHoursRequest, request?: FastifyRequest): Promise<BusinessHoursResponse>
  deleteBusinessHour(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
