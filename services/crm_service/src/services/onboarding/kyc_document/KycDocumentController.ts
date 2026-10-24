import type { KycDocumentRequest } from './types/KycDocumentRequest'
import type { KycDocumentUpdateRequest } from './types/KycDocumentUpdateRequest'
import type { KycDocumentResponse } from './types/KycDocumentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface KycDocumentController {
  listKycDocument(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<KycDocumentResponse[]>>>
  createKycDocument(app: FastifyInstance, input: KycDocumentRequest, request?: FastifyRequest): Promise<KycDocumentResponse>
  getKycDocumentById(app: FastifyInstance, request?: FastifyRequest): Promise<KycDocumentResponse>
  updateKycDocument(app: FastifyInstance, input: KycDocumentUpdateRequest, request?: FastifyRequest): Promise<KycDocumentResponse>
  deleteKycDocument(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
