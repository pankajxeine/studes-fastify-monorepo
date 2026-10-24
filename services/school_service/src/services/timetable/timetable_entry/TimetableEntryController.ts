import type { TimetableEntryRequest } from './types/TimetableEntryRequest'
import type { TimetableEntryUpdateRequest } from './types/TimetableEntryUpdateRequest'
import type { TimetableEntryResponse } from './types/TimetableEntryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TimetableEntryController {
  listTimetableEntry(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TimetableEntryResponse[]>>>
  createTimetableEntry(app: FastifyInstance, input: TimetableEntryRequest, request?: FastifyRequest): Promise<TimetableEntryResponse>
  getTimetableEntryById(app: FastifyInstance, request?: FastifyRequest): Promise<TimetableEntryResponse>
  updateTimetableEntry(app: FastifyInstance, input: TimetableEntryUpdateRequest, request?: FastifyRequest): Promise<TimetableEntryResponse>
  deleteTimetableEntry(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
