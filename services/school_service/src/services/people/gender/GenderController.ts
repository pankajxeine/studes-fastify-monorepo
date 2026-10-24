import type { GenderRequest } from './types/GenderRequest'
import type { GenderUpdateRequest } from './types/GenderUpdateRequest'
import type { GenderResponse } from './types/GenderResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GenderController {
  listGender(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GenderResponse[]>>>
  createGender(app: FastifyInstance, input: GenderRequest, request?: FastifyRequest): Promise<GenderResponse>
  getGenderById(app: FastifyInstance, request?: FastifyRequest): Promise<GenderResponse>
  updateGender(app: FastifyInstance, input: GenderUpdateRequest, request?: FastifyRequest): Promise<GenderResponse>
  deleteGender(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
