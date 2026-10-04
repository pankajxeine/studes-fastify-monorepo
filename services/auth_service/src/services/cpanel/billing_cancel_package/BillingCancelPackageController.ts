import type { BillingCancelPackageRequest } from './types/BillingCancelPackageRequest'
import type { BillingCancelPackageResponse } from './types/BillingCancelPackageResponse'
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

export interface BillingCancelPackageController {
  listBillingCancelPackage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingCancelPackageResponse[]>>>
  createBillingCancelPackage(app: FastifyInstance, input: BillingCancelPackageRequest, request?: FastifyRequest): Promise<BillingCancelPackageResponse>
  getBillingCancelPackageById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingCancelPackageResponse>
  updateBillingCancelPackage(app: FastifyInstance, input: BillingCancelPackageRequest, request?: FastifyRequest): Promise<BillingCancelPackageResponse>
  deleteBillingCancelPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
