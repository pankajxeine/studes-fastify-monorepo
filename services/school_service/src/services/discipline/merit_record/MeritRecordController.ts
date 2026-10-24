import type { MeritRecordRequest } from './types/MeritRecordRequest'
import type { MeritRecordUpdateRequest } from './types/MeritRecordUpdateRequest'
import type { MeritRecordResponse } from './types/MeritRecordResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MeritRecordController {
  listMeritRecord(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MeritRecordResponse[]>>>
  createMeritRecord(app: FastifyInstance, input: MeritRecordRequest, request?: FastifyRequest): Promise<MeritRecordResponse>
  getMeritRecordById(app: FastifyInstance, request?: FastifyRequest): Promise<MeritRecordResponse>
  updateMeritRecord(app: FastifyInstance, input: MeritRecordUpdateRequest, request?: FastifyRequest): Promise<MeritRecordResponse>
  deleteMeritRecord(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
