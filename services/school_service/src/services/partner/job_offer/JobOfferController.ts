import type { JobOfferRequest } from './types/JobOfferRequest'
import type { JobOfferUpdateRequest } from './types/JobOfferUpdateRequest'
import type { JobOfferResponse } from './types/JobOfferResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface JobOfferController {
  listJobOffer(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<JobOfferResponse[]>>>
  createJobOffer(app: FastifyInstance, input: JobOfferRequest, request?: FastifyRequest): Promise<JobOfferResponse>
  getJobOfferById(app: FastifyInstance, request?: FastifyRequest): Promise<JobOfferResponse>
  updateJobOffer(app: FastifyInstance, input: JobOfferUpdateRequest, request?: FastifyRequest): Promise<JobOfferResponse>
  deleteJobOffer(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
