import type { SubPackagesRequest } from './types/SubPackagesRequest'
import type { SubPackagesResponse } from './types/SubPackagesResponse'
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

export interface SubPackagesController {
  listSubPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubPackagesResponse[]>>>
  createSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse>
  getSubPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse>
  updateSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse>
  deleteSubPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
