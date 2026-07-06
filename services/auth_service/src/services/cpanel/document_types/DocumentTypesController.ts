import type { DocumentTypesRequest } from './types/DocumentTypesRequest'
import type { DocumentTypesResponse } from './types/DocumentTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface DocumentTypesController {
  listDocumentTypes(app: FastifyInstance, request?: FastifyRequest): Promise<DocumentTypesResponse[]>
  createDocumentType(app: FastifyInstance, input: DocumentTypesRequest, request?: FastifyRequest): Promise<DocumentTypesResponse>
  getDocumentTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<DocumentTypesResponse>
  updateDocumentType(app: FastifyInstance, input: DocumentTypesRequest, request?: FastifyRequest): Promise<DocumentTypesResponse>
  deleteDocumentType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
