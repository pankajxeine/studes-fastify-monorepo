import type { PartnerAgreementRequest } from './types/PartnerAgreementRequest'
import type { PartnerAgreementUpdateRequest } from './types/PartnerAgreementUpdateRequest'
import type { PartnerAgreementResponse } from './types/PartnerAgreementResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PartnerAgreementController {
  listPartnerAgreement(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PartnerAgreementResponse[]>>>
  createPartnerAgreement(app: FastifyInstance, input: PartnerAgreementRequest, request?: FastifyRequest): Promise<PartnerAgreementResponse>
  getPartnerAgreementById(app: FastifyInstance, request?: FastifyRequest): Promise<PartnerAgreementResponse>
  updatePartnerAgreement(app: FastifyInstance, input: PartnerAgreementUpdateRequest, request?: FastifyRequest): Promise<PartnerAgreementResponse>
  deletePartnerAgreement(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
