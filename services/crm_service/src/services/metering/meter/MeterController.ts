import type { MeterRequest } from './types/MeterRequest'
import type { MeterUpdateRequest } from './types/MeterUpdateRequest'
import type { MeterResponse } from './types/MeterResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MeterController {
  listMeter(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MeterResponse[]>>>
  createMeter(app: FastifyInstance, input: MeterRequest, request?: FastifyRequest): Promise<MeterResponse>
  getMeterById(app: FastifyInstance, request?: FastifyRequest): Promise<MeterResponse>
  updateMeter(app: FastifyInstance, input: MeterUpdateRequest, request?: FastifyRequest): Promise<MeterResponse>
  deleteMeter(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
