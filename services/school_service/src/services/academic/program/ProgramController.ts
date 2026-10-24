import type { ProgramRequest } from './types/ProgramRequest'
import type { ProgramUpdateRequest } from './types/ProgramUpdateRequest'
import type { ProgramResponse } from './types/ProgramResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ProgramController {
  listProgram(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ProgramResponse[]>>>
  createProgram(app: FastifyInstance, input: ProgramRequest, request?: FastifyRequest): Promise<ProgramResponse>
  getProgramById(app: FastifyInstance, request?: FastifyRequest): Promise<ProgramResponse>
  updateProgram(app: FastifyInstance, input: ProgramUpdateRequest, request?: FastifyRequest): Promise<ProgramResponse>
  deleteProgram(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
