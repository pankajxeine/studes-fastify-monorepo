import type { PreviousEducationRequest } from './types/PreviousEducationRequest'
import type { PreviousEducationUpdateRequest } from './types/PreviousEducationUpdateRequest'
import type { PreviousEducationResponse } from './types/PreviousEducationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PreviousEducationController {
  listPreviousEducation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PreviousEducationResponse[]>>>
  createPreviousEducation(app: FastifyInstance, input: PreviousEducationRequest, request?: FastifyRequest): Promise<PreviousEducationResponse>
  getPreviousEducationById(app: FastifyInstance, request?: FastifyRequest): Promise<PreviousEducationResponse>
  updatePreviousEducation(app: FastifyInstance, input: PreviousEducationUpdateRequest, request?: FastifyRequest): Promise<PreviousEducationResponse>
  deletePreviousEducation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
