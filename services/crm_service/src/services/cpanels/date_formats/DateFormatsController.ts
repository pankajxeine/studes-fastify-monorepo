import type { DateFormatsRequest } from './types/DateFormatsRequest'
import type { DateFormatsResponse } from './types/DateFormatsResponse'
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

export interface DateFormatsController {
  listDateFormats(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DateFormatsResponse[]>>>
  createDateFormat(app: FastifyInstance, input: DateFormatsRequest, request?: FastifyRequest): Promise<DateFormatsResponse>
  getDateFormatsById(app: FastifyInstance, request?: FastifyRequest): Promise<DateFormatsResponse>
  updateDateFormat(app: FastifyInstance, input: DateFormatsRequest, request?: FastifyRequest): Promise<DateFormatsResponse>
  deleteDateFormat(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
