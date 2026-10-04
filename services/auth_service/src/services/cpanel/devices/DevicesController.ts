import type { DevicesRequest } from './types/DevicesRequest'
import type { DevicesResponse } from './types/DevicesResponse'
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

export interface DevicesController {
  listDevices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DevicesResponse[]>>>
  createDevice(app: FastifyInstance, input: DevicesRequest, request?: FastifyRequest): Promise<DevicesResponse>
  getDevicesById(app: FastifyInstance, request?: FastifyRequest): Promise<DevicesResponse>
  updateDevice(app: FastifyInstance, input: DevicesRequest, request?: FastifyRequest): Promise<DevicesResponse>
  deleteDevice(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
