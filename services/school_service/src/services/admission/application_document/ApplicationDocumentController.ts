import type { ApplicationDocumentRequest } from './types/ApplicationDocumentRequest'
import type { ApplicationDocumentUpdateRequest } from './types/ApplicationDocumentUpdateRequest'
import type { ApplicationDocumentResponse } from './types/ApplicationDocumentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApplicationDocumentController {
  listApplicationDocument(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApplicationDocumentResponse[]>>>
  createApplicationDocument(app: FastifyInstance, input: ApplicationDocumentRequest, request?: FastifyRequest): Promise<ApplicationDocumentResponse>
  getApplicationDocumentById(app: FastifyInstance, request?: FastifyRequest): Promise<ApplicationDocumentResponse>
  updateApplicationDocument(app: FastifyInstance, input: ApplicationDocumentUpdateRequest, request?: FastifyRequest): Promise<ApplicationDocumentResponse>
  deleteApplicationDocument(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
