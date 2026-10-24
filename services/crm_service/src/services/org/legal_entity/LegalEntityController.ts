import type { LegalEntityRequest } from './types/LegalEntityRequest'
import type { LegalEntityUpdateRequest } from './types/LegalEntityUpdateRequest'
import type { LegalEntityResponse } from './types/LegalEntityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LegalEntityController {
  listLegalEntity(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LegalEntityResponse[]>>>
  createLegalEntity(app: FastifyInstance, input: LegalEntityRequest, request?: FastifyRequest): Promise<LegalEntityResponse>
  getLegalEntityById(app: FastifyInstance, request?: FastifyRequest): Promise<LegalEntityResponse>
  updateLegalEntity(app: FastifyInstance, input: LegalEntityUpdateRequest, request?: FastifyRequest): Promise<LegalEntityResponse>
  deleteLegalEntity(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
