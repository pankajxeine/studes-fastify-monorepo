import type { InquirySourceRequest } from './types/InquirySourceRequest'
import type { InquirySourceUpdateRequest } from './types/InquirySourceUpdateRequest'
import type { InquirySourceResponse } from './types/InquirySourceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InquirySourceController {
  listInquirySource(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InquirySourceResponse[]>>>
  createInquirySource(app: FastifyInstance, input: InquirySourceRequest, request?: FastifyRequest): Promise<InquirySourceResponse>
  getInquirySourceById(app: FastifyInstance, request?: FastifyRequest): Promise<InquirySourceResponse>
  updateInquirySource(app: FastifyInstance, input: InquirySourceUpdateRequest, request?: FastifyRequest): Promise<InquirySourceResponse>
  deleteInquirySource(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
