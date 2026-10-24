import type { VehicleRequest } from './types/VehicleRequest'
import type { VehicleUpdateRequest } from './types/VehicleUpdateRequest'
import type { VehicleResponse } from './types/VehicleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface VehicleController {
  listVehicle(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VehicleResponse[]>>>
  createVehicle(app: FastifyInstance, input: VehicleRequest, request?: FastifyRequest): Promise<VehicleResponse>
  getVehicleById(app: FastifyInstance, request?: FastifyRequest): Promise<VehicleResponse>
  updateVehicle(app: FastifyInstance, input: VehicleUpdateRequest, request?: FastifyRequest): Promise<VehicleResponse>
  deleteVehicle(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
