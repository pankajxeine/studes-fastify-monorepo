import type { PersonDocumentRequest } from './types/PersonDocumentRequest'
import type { PersonDocumentUpdateRequest } from './types/PersonDocumentUpdateRequest'
import type { PersonDocumentResponse } from './types/PersonDocumentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PersonDocumentController {
  listPersonDocument(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PersonDocumentResponse[]>>>
  createPersonDocument(app: FastifyInstance, input: PersonDocumentRequest, request?: FastifyRequest): Promise<PersonDocumentResponse>
  getPersonDocumentById(app: FastifyInstance, request?: FastifyRequest): Promise<PersonDocumentResponse>
  updatePersonDocument(app: FastifyInstance, input: PersonDocumentUpdateRequest, request?: FastifyRequest): Promise<PersonDocumentResponse>
  deletePersonDocument(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
