import type { HolidayRequest } from './types/HolidayRequest'
import type { HolidayUpdateRequest } from './types/HolidayUpdateRequest'
import type { HolidayResponse } from './types/HolidayResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface HolidayController {
  listHoliday(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HolidayResponse[]>>>
  createHoliday(app: FastifyInstance, input: HolidayRequest, request?: FastifyRequest): Promise<HolidayResponse>
  getHolidayById(app: FastifyInstance, request?: FastifyRequest): Promise<HolidayResponse>
  updateHoliday(app: FastifyInstance, input: HolidayUpdateRequest, request?: FastifyRequest): Promise<HolidayResponse>
  deleteHoliday(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
