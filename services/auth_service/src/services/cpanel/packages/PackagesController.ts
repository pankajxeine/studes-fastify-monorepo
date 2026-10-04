import type { PackagesRequest } from './types/PackagesRequest'
import type { PackagesResponse } from './types/PackagesResponse'
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

export interface PackagesController {
  listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackagesResponse[]>>>
  createPackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse>
  getPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse>
  updatePackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse>
  deletePackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
