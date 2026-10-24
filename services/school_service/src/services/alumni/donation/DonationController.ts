import type { DonationRequest } from './types/DonationRequest'
import type { DonationUpdateRequest } from './types/DonationUpdateRequest'
import type { DonationResponse } from './types/DonationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DonationController {
  listDonation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DonationResponse[]>>>
  createDonation(app: FastifyInstance, input: DonationRequest, request?: FastifyRequest): Promise<DonationResponse>
  getDonationById(app: FastifyInstance, request?: FastifyRequest): Promise<DonationResponse>
  updateDonation(app: FastifyInstance, input: DonationUpdateRequest, request?: FastifyRequest): Promise<DonationResponse>
  deleteDonation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
