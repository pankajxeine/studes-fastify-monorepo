import type { TimetableCreateRequest } from './types/TimetableCreateRequest'
import type { TimetableEntry } from './types/TimetableEntry'
import type { TimetableList } from './types/TimetableList'
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

export interface TimetableController {
  listTimetable(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TimetableList>>>
  createTimetableEntry(app: FastifyInstance, input: TimetableCreateRequest, request?: FastifyRequest): Promise<TimetableEntry>
}
