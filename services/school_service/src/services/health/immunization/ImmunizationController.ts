import type { ImmunizationRequest } from './types/ImmunizationRequest'
import type { ImmunizationUpdateRequest } from './types/ImmunizationUpdateRequest'
import type { ImmunizationResponse } from './types/ImmunizationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ImmunizationController {
  listImmunization(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ImmunizationResponse[]>>>
  createImmunization(app: FastifyInstance, input: ImmunizationRequest, request?: FastifyRequest): Promise<ImmunizationResponse>
  getImmunizationById(app: FastifyInstance, request?: FastifyRequest): Promise<ImmunizationResponse>
  updateImmunization(app: FastifyInstance, input: ImmunizationUpdateRequest, request?: FastifyRequest): Promise<ImmunizationResponse>
  deleteImmunization(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
