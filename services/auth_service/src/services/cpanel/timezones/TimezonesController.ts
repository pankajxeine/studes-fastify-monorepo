import type { TimezonesRequest } from './types/TimezonesRequest'
import type { TimezonesResponse } from './types/TimezonesResponse'
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

export interface TimezonesController {
  listTimezones(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TimezonesResponse[]>>>
  createTimezone(app: FastifyInstance, input: TimezonesRequest, request?: FastifyRequest): Promise<TimezonesResponse>
  getTimezonesById(app: FastifyInstance, request?: FastifyRequest): Promise<TimezonesResponse>
  updateTimezone(app: FastifyInstance, input: TimezonesRequest, request?: FastifyRequest): Promise<TimezonesResponse>
  deleteTimezone(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
