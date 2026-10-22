import type { ShippingMethodsRequest } from './types/ShippingMethodsRequest'
import type { ShippingMethodsResponse } from './types/ShippingMethodsResponse'
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

export interface ShippingMethodsController {
  listShippingMethods(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ShippingMethodsResponse[]>>>
  createShippingMethod(app: FastifyInstance, input: ShippingMethodsRequest, request?: FastifyRequest): Promise<ShippingMethodsResponse>
  getShippingMethodsById(app: FastifyInstance, request?: FastifyRequest): Promise<ShippingMethodsResponse>
  updateShippingMethod(app: FastifyInstance, input: ShippingMethodsRequest, request?: FastifyRequest): Promise<ShippingMethodsResponse>
  deleteShippingMethod(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
