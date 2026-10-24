import type { RelationshipTypeRequest } from './types/RelationshipTypeRequest'
import type { RelationshipTypeUpdateRequest } from './types/RelationshipTypeUpdateRequest'
import type { RelationshipTypeResponse } from './types/RelationshipTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RelationshipTypeController {
  listRelationshipType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RelationshipTypeResponse[]>>>
  createRelationshipType(app: FastifyInstance, input: RelationshipTypeRequest, request?: FastifyRequest): Promise<RelationshipTypeResponse>
  getRelationshipTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<RelationshipTypeResponse>
  updateRelationshipType(app: FastifyInstance, input: RelationshipTypeUpdateRequest, request?: FastifyRequest): Promise<RelationshipTypeResponse>
  deleteRelationshipType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
