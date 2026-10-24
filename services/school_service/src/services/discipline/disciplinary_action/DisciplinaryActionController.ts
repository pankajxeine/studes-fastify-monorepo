import type { DisciplinaryActionRequest } from './types/DisciplinaryActionRequest'
import type { DisciplinaryActionUpdateRequest } from './types/DisciplinaryActionUpdateRequest'
import type { DisciplinaryActionResponse } from './types/DisciplinaryActionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DisciplinaryActionController {
  listDisciplinaryAction(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DisciplinaryActionResponse[]>>>
  createDisciplinaryAction(app: FastifyInstance, input: DisciplinaryActionRequest, request?: FastifyRequest): Promise<DisciplinaryActionResponse>
  getDisciplinaryActionById(app: FastifyInstance, request?: FastifyRequest): Promise<DisciplinaryActionResponse>
  updateDisciplinaryAction(app: FastifyInstance, input: DisciplinaryActionUpdateRequest, request?: FastifyRequest): Promise<DisciplinaryActionResponse>
  deleteDisciplinaryAction(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
