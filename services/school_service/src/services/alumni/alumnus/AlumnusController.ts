import type { AlumnusRequest } from './types/AlumnusRequest'
import type { AlumnusUpdateRequest } from './types/AlumnusUpdateRequest'
import type { AlumnusResponse } from './types/AlumnusResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AlumnusController {
  listAlumnus(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AlumnusResponse[]>>>
  createAlumnus(app: FastifyInstance, input: AlumnusRequest, request?: FastifyRequest): Promise<AlumnusResponse>
  getAlumnusById(app: FastifyInstance, request?: FastifyRequest): Promise<AlumnusResponse>
  updateAlumnus(app: FastifyInstance, input: AlumnusUpdateRequest, request?: FastifyRequest): Promise<AlumnusResponse>
  deleteAlumnus(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
