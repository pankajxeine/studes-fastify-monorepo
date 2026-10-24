import type { LookupValueRequest } from './types/LookupValueRequest'
import type { LookupValueUpdateRequest } from './types/LookupValueUpdateRequest'
import type { LookupValueResponse } from './types/LookupValueResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LookupValueController {
  listLookupValue(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LookupValueResponse[]>>>
  createLookupValue(app: FastifyInstance, input: LookupValueRequest, request?: FastifyRequest): Promise<LookupValueResponse>
  getLookupValueById(app: FastifyInstance, request?: FastifyRequest): Promise<LookupValueResponse>
  updateLookupValue(app: FastifyInstance, input: LookupValueUpdateRequest, request?: FastifyRequest): Promise<LookupValueResponse>
  deleteLookupValue(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
