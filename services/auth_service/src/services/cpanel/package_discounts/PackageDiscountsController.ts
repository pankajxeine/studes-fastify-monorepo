import type { PackageDiscountsRequest } from './types/PackageDiscountsRequest'
import type { PackageDiscountsResponse } from './types/PackageDiscountsResponse'
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

export interface PackageDiscountsController {
  listPackageDiscounts(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageDiscountsResponse[]>>>
  createPackageDiscount(app: FastifyInstance, input: PackageDiscountsRequest, request?: FastifyRequest): Promise<PackageDiscountsResponse>
  getPackageDiscountsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageDiscountsResponse>
  updatePackageDiscount(app: FastifyInstance, input: PackageDiscountsRequest, request?: FastifyRequest): Promise<PackageDiscountsResponse>
  deletePackageDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
