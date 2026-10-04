import type { PaxStoreLinksRequest } from './types/PaxStoreLinksRequest'
import type { PaxStoreLinksResponse } from './types/PaxStoreLinksResponse'
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

export interface PaxStoreLinksController {
  listPaxStoreLinks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaxStoreLinksResponse[]>>>
  createPaxStoreLink(app: FastifyInstance, input: PaxStoreLinksRequest, request?: FastifyRequest): Promise<PaxStoreLinksResponse>
  getPaxStoreLinksById(app: FastifyInstance, request?: FastifyRequest): Promise<PaxStoreLinksResponse>
  updatePaxStoreLink(app: FastifyInstance, input: PaxStoreLinksRequest, request?: FastifyRequest): Promise<PaxStoreLinksResponse>
  deletePaxStoreLink(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
