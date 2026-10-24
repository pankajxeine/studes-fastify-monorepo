import type { ConsentRequest } from './types/ConsentRequest'
import type { ConsentUpdateRequest } from './types/ConsentUpdateRequest'
import type { ConsentResponse } from './types/ConsentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ConsentController {
  listConsent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ConsentResponse[]>>>
  createConsent(app: FastifyInstance, input: ConsentRequest, request?: FastifyRequest): Promise<ConsentResponse>
  getConsentById(app: FastifyInstance, request?: FastifyRequest): Promise<ConsentResponse>
  updateConsent(app: FastifyInstance, input: ConsentUpdateRequest, request?: FastifyRequest): Promise<ConsentResponse>
  deleteConsent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
