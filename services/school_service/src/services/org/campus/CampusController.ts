import type { CampusRequest } from './types/CampusRequest'
import type { CampusUpdateRequest } from './types/CampusUpdateRequest'
import type { CampusResponse } from './types/CampusResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CampusController {
  listCampus(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CampusResponse[]>>>
  createCampus(app: FastifyInstance, input: CampusRequest, request?: FastifyRequest): Promise<CampusResponse>
  getCampusById(app: FastifyInstance, request?: FastifyRequest): Promise<CampusResponse>
  updateCampus(app: FastifyInstance, input: CampusUpdateRequest, request?: FastifyRequest): Promise<CampusResponse>
  deleteCampus(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
