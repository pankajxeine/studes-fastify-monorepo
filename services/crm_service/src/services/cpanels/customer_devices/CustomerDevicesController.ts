import type { CustomerDevicesRequest } from './types/CustomerDevicesRequest'
import type { CustomerDevicesResponse } from './types/CustomerDevicesResponse'
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

export interface CustomerDevicesController {
  listCustomerDevices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerDevicesResponse[]>>>
  createCustomerDevice(app: FastifyInstance, input: CustomerDevicesRequest, request?: FastifyRequest): Promise<CustomerDevicesResponse>
  getCustomerDevicesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDevicesResponse>
  updateCustomerDevice(app: FastifyInstance, input: CustomerDevicesRequest, request?: FastifyRequest): Promise<CustomerDevicesResponse>
  deleteCustomerDevice(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
