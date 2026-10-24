import type { DocumentTypeRequest } from './types/DocumentTypeRequest'
import type { DocumentTypeUpdateRequest } from './types/DocumentTypeUpdateRequest'
import type { DocumentTypeResponse } from './types/DocumentTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DocumentTypeController {
  listDocumentType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DocumentTypeResponse[]>>>
  createDocumentType(app: FastifyInstance, input: DocumentTypeRequest, request?: FastifyRequest): Promise<DocumentTypeResponse>
  getDocumentTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<DocumentTypeResponse>
  updateDocumentType(app: FastifyInstance, input: DocumentTypeUpdateRequest, request?: FastifyRequest): Promise<DocumentTypeResponse>
  deleteDocumentType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
