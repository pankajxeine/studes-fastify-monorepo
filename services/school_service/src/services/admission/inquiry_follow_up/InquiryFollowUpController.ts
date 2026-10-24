import type { InquiryFollowUpRequest } from './types/InquiryFollowUpRequest'
import type { InquiryFollowUpUpdateRequest } from './types/InquiryFollowUpUpdateRequest'
import type { InquiryFollowUpResponse } from './types/InquiryFollowUpResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InquiryFollowUpController {
  listInquiryFollowUp(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InquiryFollowUpResponse[]>>>
  createInquiryFollowUp(app: FastifyInstance, input: InquiryFollowUpRequest, request?: FastifyRequest): Promise<InquiryFollowUpResponse>
  getInquiryFollowUpById(app: FastifyInstance, request?: FastifyRequest): Promise<InquiryFollowUpResponse>
  updateInquiryFollowUp(app: FastifyInstance, input: InquiryFollowUpUpdateRequest, request?: FastifyRequest): Promise<InquiryFollowUpResponse>
  deleteInquiryFollowUp(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
