import type { ConcessionTypeRequest } from './types/ConcessionTypeRequest'
import type { ConcessionTypeUpdateRequest } from './types/ConcessionTypeUpdateRequest'
import type { ConcessionTypeResponse } from './types/ConcessionTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ConcessionTypeController {
  listConcessionType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ConcessionTypeResponse[]>>>
  createConcessionType(app: FastifyInstance, input: ConcessionTypeRequest, request?: FastifyRequest): Promise<ConcessionTypeResponse>
  getConcessionTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<ConcessionTypeResponse>
  updateConcessionType(app: FastifyInstance, input: ConcessionTypeUpdateRequest, request?: FastifyRequest): Promise<ConcessionTypeResponse>
  deleteConcessionType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
