import type { AllergenRequest } from './types/AllergenRequest'
import type { AllergenUpdateRequest } from './types/AllergenUpdateRequest'
import type { AllergenResponse } from './types/AllergenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AllergenController {
  listAllergen(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AllergenResponse[]>>>
  createAllergen(app: FastifyInstance, input: AllergenRequest, request?: FastifyRequest): Promise<AllergenResponse>
  getAllergenById(app: FastifyInstance, request?: FastifyRequest): Promise<AllergenResponse>
  updateAllergen(app: FastifyInstance, input: AllergenUpdateRequest, request?: FastifyRequest): Promise<AllergenResponse>
  deleteAllergen(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
