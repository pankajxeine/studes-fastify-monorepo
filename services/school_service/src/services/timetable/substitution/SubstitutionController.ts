import type { SubstitutionRequest } from './types/SubstitutionRequest'
import type { SubstitutionUpdateRequest } from './types/SubstitutionUpdateRequest'
import type { SubstitutionResponse } from './types/SubstitutionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SubstitutionController {
  listSubstitution(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubstitutionResponse[]>>>
  createSubstitution(app: FastifyInstance, input: SubstitutionRequest, request?: FastifyRequest): Promise<SubstitutionResponse>
  getSubstitutionById(app: FastifyInstance, request?: FastifyRequest): Promise<SubstitutionResponse>
  updateSubstitution(app: FastifyInstance, input: SubstitutionUpdateRequest, request?: FastifyRequest): Promise<SubstitutionResponse>
  deleteSubstitution(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
