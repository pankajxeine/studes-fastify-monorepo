import type { AssetRequest } from './types/AssetRequest'
import type { AssetUpdateRequest } from './types/AssetUpdateRequest'
import type { AssetResponse } from './types/AssetResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AssetController {
  listAsset(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssetResponse[]>>>
  createAsset(app: FastifyInstance, input: AssetRequest, request?: FastifyRequest): Promise<AssetResponse>
  getAssetById(app: FastifyInstance, request?: FastifyRequest): Promise<AssetResponse>
  updateAsset(app: FastifyInstance, input: AssetUpdateRequest, request?: FastifyRequest): Promise<AssetResponse>
  deleteAsset(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
