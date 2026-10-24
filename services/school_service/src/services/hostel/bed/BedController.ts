import type { BedRequest } from './types/BedRequest'
import type { BedUpdateRequest } from './types/BedUpdateRequest'
import type { BedResponse } from './types/BedResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BedController {
  listBed(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BedResponse[]>>>
  createBed(app: FastifyInstance, input: BedRequest, request?: FastifyRequest): Promise<BedResponse>
  getBedById(app: FastifyInstance, request?: FastifyRequest): Promise<BedResponse>
  updateBed(app: FastifyInstance, input: BedUpdateRequest, request?: FastifyRequest): Promise<BedResponse>
  deleteBed(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
