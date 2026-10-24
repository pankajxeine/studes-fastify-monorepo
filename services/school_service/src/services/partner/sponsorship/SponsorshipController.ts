import type { SponsorshipRequest } from './types/SponsorshipRequest'
import type { SponsorshipUpdateRequest } from './types/SponsorshipUpdateRequest'
import type { SponsorshipResponse } from './types/SponsorshipResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SponsorshipController {
  listSponsorship(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SponsorshipResponse[]>>>
  createSponsorship(app: FastifyInstance, input: SponsorshipRequest, request?: FastifyRequest): Promise<SponsorshipResponse>
  getSponsorshipById(app: FastifyInstance, request?: FastifyRequest): Promise<SponsorshipResponse>
  updateSponsorship(app: FastifyInstance, input: SponsorshipUpdateRequest, request?: FastifyRequest): Promise<SponsorshipResponse>
  deleteSponsorship(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
