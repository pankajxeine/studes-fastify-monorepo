import type { BillingAddPackageRequest } from './types/BillingAddPackageRequest'
import type { BillingAddPackageResponse } from './types/BillingAddPackageResponse'
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

export interface BillingAddPackageController {
  listBillingAddPackage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingAddPackageResponse[]>>>
  createBillingAddPackage(app: FastifyInstance, input: BillingAddPackageRequest, request?: FastifyRequest): Promise<BillingAddPackageResponse>
  getBillingAddPackageById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingAddPackageResponse>
  updateBillingAddPackage(app: FastifyInstance, input: BillingAddPackageRequest, request?: FastifyRequest): Promise<BillingAddPackageResponse>
  deleteBillingAddPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
