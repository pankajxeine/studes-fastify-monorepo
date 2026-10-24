import type { AccessReviewItemRequest } from './types/AccessReviewItemRequest'
import type { AccessReviewItemUpdateRequest } from './types/AccessReviewItemUpdateRequest'
import type { AccessReviewItemResponse } from './types/AccessReviewItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AccessReviewItemController {
  listAccessReviewItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AccessReviewItemResponse[]>>>
  createAccessReviewItem(app: FastifyInstance, input: AccessReviewItemRequest, request?: FastifyRequest): Promise<AccessReviewItemResponse>
  getAccessReviewItemById(app: FastifyInstance, request?: FastifyRequest): Promise<AccessReviewItemResponse>
  updateAccessReviewItem(app: FastifyInstance, input: AccessReviewItemUpdateRequest, request?: FastifyRequest): Promise<AccessReviewItemResponse>
  deleteAccessReviewItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
