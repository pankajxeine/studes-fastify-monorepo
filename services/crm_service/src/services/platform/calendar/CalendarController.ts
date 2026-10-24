import type { CalendarRequest } from './types/CalendarRequest'
import type { CalendarUpdateRequest } from './types/CalendarUpdateRequest'
import type { CalendarResponse } from './types/CalendarResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CalendarController {
  listCalendar(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CalendarResponse[]>>>
  createCalendar(app: FastifyInstance, input: CalendarRequest, request?: FastifyRequest): Promise<CalendarResponse>
  getCalendarById(app: FastifyInstance, request?: FastifyRequest): Promise<CalendarResponse>
  updateCalendar(app: FastifyInstance, input: CalendarUpdateRequest, request?: FastifyRequest): Promise<CalendarResponse>
  deleteCalendar(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
