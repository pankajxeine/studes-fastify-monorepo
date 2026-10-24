import type { AssetMaintenanceRequest } from './types/AssetMaintenanceRequest'
import type { AssetMaintenanceUpdateRequest } from './types/AssetMaintenanceUpdateRequest'
import type { AssetMaintenanceResponse } from './types/AssetMaintenanceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AssetMaintenanceController {
  listAssetMaintenance(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssetMaintenanceResponse[]>>>
  createAssetMaintenance(app: FastifyInstance, input: AssetMaintenanceRequest, request?: FastifyRequest): Promise<AssetMaintenanceResponse>
  getAssetMaintenanceById(app: FastifyInstance, request?: FastifyRequest): Promise<AssetMaintenanceResponse>
  updateAssetMaintenance(app: FastifyInstance, input: AssetMaintenanceUpdateRequest, request?: FastifyRequest): Promise<AssetMaintenanceResponse>
  deleteAssetMaintenance(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
