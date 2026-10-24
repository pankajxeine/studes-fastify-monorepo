import type { VehicleMaintenanceRequest } from './types/VehicleMaintenanceRequest'
import type { VehicleMaintenanceUpdateRequest } from './types/VehicleMaintenanceUpdateRequest'
import type { VehicleMaintenanceResponse } from './types/VehicleMaintenanceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface VehicleMaintenanceController {
  listVehicleMaintenance(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VehicleMaintenanceResponse[]>>>
  createVehicleMaintenance(app: FastifyInstance, input: VehicleMaintenanceRequest, request?: FastifyRequest): Promise<VehicleMaintenanceResponse>
  getVehicleMaintenanceById(app: FastifyInstance, request?: FastifyRequest): Promise<VehicleMaintenanceResponse>
  updateVehicleMaintenance(app: FastifyInstance, input: VehicleMaintenanceUpdateRequest, request?: FastifyRequest): Promise<VehicleMaintenanceResponse>
  deleteVehicleMaintenance(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
