import type { AccessReviewRequest } from './types/AccessReviewRequest'
import type { AccessReviewUpdateRequest } from './types/AccessReviewUpdateRequest'
import type { AccessReviewResponse } from './types/AccessReviewResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AccessReviewController {
  listAccessReview(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AccessReviewResponse[]>>>
  createAccessReview(app: FastifyInstance, input: AccessReviewRequest, request?: FastifyRequest): Promise<AccessReviewResponse>
  getAccessReviewById(app: FastifyInstance, request?: FastifyRequest): Promise<AccessReviewResponse>
  updateAccessReview(app: FastifyInstance, input: AccessReviewUpdateRequest, request?: FastifyRequest): Promise<AccessReviewResponse>
  deleteAccessReview(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
