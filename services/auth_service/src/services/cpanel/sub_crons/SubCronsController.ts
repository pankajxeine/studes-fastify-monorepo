import type { SubCronsRequest } from './types/SubCronsRequest'
import type { SubCronsResponse } from './types/SubCronsResponse'
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

export interface SubCronsController {
  listSubCrons(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubCronsResponse[]>>>
  createSubCron(app: FastifyInstance, input: SubCronsRequest, request?: FastifyRequest): Promise<SubCronsResponse>
  getSubCronsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubCronsResponse>
  updateSubCron(app: FastifyInstance, input: SubCronsRequest, request?: FastifyRequest): Promise<SubCronsResponse>
  deleteSubCron(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
