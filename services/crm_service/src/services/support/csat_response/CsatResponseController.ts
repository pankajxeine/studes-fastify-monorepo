import type { CsatResponseRequest } from './types/CsatResponseRequest'
import type { CsatResponseUpdateRequest } from './types/CsatResponseUpdateRequest'
import type { CsatResponseResponse } from './types/CsatResponseResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CsatResponseController {
  listCsatResponse(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CsatResponseResponse[]>>>
  createCsatResponse(app: FastifyInstance, input: CsatResponseRequest, request?: FastifyRequest): Promise<CsatResponseResponse>
  getCsatResponseById(app: FastifyInstance, request?: FastifyRequest): Promise<CsatResponseResponse>
  updateCsatResponse(app: FastifyInstance, input: CsatResponseUpdateRequest, request?: FastifyRequest): Promise<CsatResponseResponse>
  deleteCsatResponse(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
