import type { InquiryRequest } from './types/InquiryRequest'
import type { InquiryUpdateRequest } from './types/InquiryUpdateRequest'
import type { InquiryResponse } from './types/InquiryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InquiryController {
  listInquiry(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InquiryResponse[]>>>
  createInquiry(app: FastifyInstance, input: InquiryRequest, request?: FastifyRequest): Promise<InquiryResponse>
  getInquiryById(app: FastifyInstance, request?: FastifyRequest): Promise<InquiryResponse>
  updateInquiry(app: FastifyInstance, input: InquiryUpdateRequest, request?: FastifyRequest): Promise<InquiryResponse>
  deleteInquiry(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
