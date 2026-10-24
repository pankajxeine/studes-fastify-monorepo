import type { CampaignRequest } from './types/CampaignRequest'
import type { CampaignUpdateRequest } from './types/CampaignUpdateRequest'
import type { CampaignResponse } from './types/CampaignResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CampaignController {
  listCampaign(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CampaignResponse[]>>>
  createCampaign(app: FastifyInstance, input: CampaignRequest, request?: FastifyRequest): Promise<CampaignResponse>
  getCampaignById(app: FastifyInstance, request?: FastifyRequest): Promise<CampaignResponse>
  updateCampaign(app: FastifyInstance, input: CampaignUpdateRequest, request?: FastifyRequest): Promise<CampaignResponse>
  deleteCampaign(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
