import type { DonationCampaignRequest } from './types/DonationCampaignRequest'
import type { DonationCampaignUpdateRequest } from './types/DonationCampaignUpdateRequest'
import type { DonationCampaignResponse } from './types/DonationCampaignResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DonationCampaignController {
  listDonationCampaign(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DonationCampaignResponse[]>>>
  createDonationCampaign(app: FastifyInstance, input: DonationCampaignRequest, request?: FastifyRequest): Promise<DonationCampaignResponse>
  getDonationCampaignById(app: FastifyInstance, request?: FastifyRequest): Promise<DonationCampaignResponse>
  updateDonationCampaign(app: FastifyInstance, input: DonationCampaignUpdateRequest, request?: FastifyRequest): Promise<DonationCampaignResponse>
  deleteDonationCampaign(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
