import type { HouseRequest } from './types/HouseRequest'
import type { HouseUpdateRequest } from './types/HouseUpdateRequest'
import type { HouseResponse } from './types/HouseResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface HouseController {
  listHouse(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HouseResponse[]>>>
  createHouse(app: FastifyInstance, input: HouseRequest, request?: FastifyRequest): Promise<HouseResponse>
  getHouseById(app: FastifyInstance, request?: FastifyRequest): Promise<HouseResponse>
  updateHouse(app: FastifyInstance, input: HouseUpdateRequest, request?: FastifyRequest): Promise<HouseResponse>
  deleteHouse(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
