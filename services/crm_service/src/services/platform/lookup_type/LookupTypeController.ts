import type { LookupTypeRequest } from './types/LookupTypeRequest'
import type { LookupTypeUpdateRequest } from './types/LookupTypeUpdateRequest'
import type { LookupTypeResponse } from './types/LookupTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LookupTypeController {
  listLookupType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LookupTypeResponse[]>>>
  createLookupType(app: FastifyInstance, input: LookupTypeRequest, request?: FastifyRequest): Promise<LookupTypeResponse>
  getLookupTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<LookupTypeResponse>
  updateLookupType(app: FastifyInstance, input: LookupTypeUpdateRequest, request?: FastifyRequest): Promise<LookupTypeResponse>
  deleteLookupType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
