import type { HardwareShippingAddressRequest } from './types/HardwareShippingAddressRequest'
import type { HardwareShippingAddressResponse } from './types/HardwareShippingAddressResponse'
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

export interface HardwareShippingAddressController {
  listHardwareShippingAddress(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HardwareShippingAddressResponse[]>>>
  createHardwareShippingAddres(app: FastifyInstance, input: HardwareShippingAddressRequest, request?: FastifyRequest): Promise<HardwareShippingAddressResponse>
  getHardwareShippingAddressById(app: FastifyInstance, request?: FastifyRequest): Promise<HardwareShippingAddressResponse>
  updateHardwareShippingAddres(app: FastifyInstance, input: HardwareShippingAddressRequest, request?: FastifyRequest): Promise<HardwareShippingAddressResponse>
  deleteHardwareShippingAddres(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
