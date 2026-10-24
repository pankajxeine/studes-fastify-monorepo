import type { DesignationRequest } from './types/DesignationRequest'
import type { DesignationUpdateRequest } from './types/DesignationUpdateRequest'
import type { DesignationResponse } from './types/DesignationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DesignationController {
  listDesignation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DesignationResponse[]>>>
  createDesignation(app: FastifyInstance, input: DesignationRequest, request?: FastifyRequest): Promise<DesignationResponse>
  getDesignationById(app: FastifyInstance, request?: FastifyRequest): Promise<DesignationResponse>
  updateDesignation(app: FastifyInstance, input: DesignationUpdateRequest, request?: FastifyRequest): Promise<DesignationResponse>
  deleteDesignation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
