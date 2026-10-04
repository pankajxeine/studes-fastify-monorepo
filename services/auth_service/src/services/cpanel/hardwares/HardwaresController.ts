import type { HardwaresRequest } from './types/HardwaresRequest'
import type { HardwaresResponse } from './types/HardwaresResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface HardwaresController {
  listHardwares(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HardwaresResponse[]>>>
  createHardware(app: FastifyInstance, input: HardwaresRequest, request?: FastifyRequest): Promise<HardwaresResponse>
  getHardwaresById(app: FastifyInstance, request?: FastifyRequest): Promise<HardwaresResponse>
  updateHardware(app: FastifyInstance, input: HardwaresRequest, request?: FastifyRequest): Promise<HardwaresResponse>
  deleteHardware(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
