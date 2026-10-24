import type { IdempotencyKeyRequest } from './types/IdempotencyKeyRequest'
import type { IdempotencyKeyUpdateRequest } from './types/IdempotencyKeyUpdateRequest'
import type { IdempotencyKeyResponse } from './types/IdempotencyKeyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface IdempotencyKeyController {
  listIdempotencyKey(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IdempotencyKeyResponse[]>>>
  createIdempotencyKey(app: FastifyInstance, input: IdempotencyKeyRequest, request?: FastifyRequest): Promise<IdempotencyKeyResponse>
  getIdempotencyKeyById(app: FastifyInstance, request?: FastifyRequest): Promise<IdempotencyKeyResponse>
  updateIdempotencyKey(app: FastifyInstance, input: IdempotencyKeyUpdateRequest, request?: FastifyRequest): Promise<IdempotencyKeyResponse>
  deleteIdempotencyKey(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
