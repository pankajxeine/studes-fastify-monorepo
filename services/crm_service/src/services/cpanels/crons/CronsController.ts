import type { CronsRequest } from './types/CronsRequest'
import type { CronsResponse } from './types/CronsResponse'
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

export interface CronsController {
  listCrons(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CronsResponse[]>>>
  createCron(app: FastifyInstance, input: CronsRequest, request?: FastifyRequest): Promise<CronsResponse>
  getCronsById(app: FastifyInstance, request?: FastifyRequest): Promise<CronsResponse>
  updateCron(app: FastifyInstance, input: CronsRequest, request?: FastifyRequest): Promise<CronsResponse>
  deleteCron(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
