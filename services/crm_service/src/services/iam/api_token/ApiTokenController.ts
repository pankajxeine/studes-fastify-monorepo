import type { ApiTokenRequest } from './types/ApiTokenRequest'
import type { ApiTokenUpdateRequest } from './types/ApiTokenUpdateRequest'
import type { ApiTokenResponse } from './types/ApiTokenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApiTokenController {
  listApiToken(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApiTokenResponse[]>>>
  createApiToken(app: FastifyInstance, input: ApiTokenRequest, request?: FastifyRequest): Promise<ApiTokenResponse>
  getApiTokenById(app: FastifyInstance, request?: FastifyRequest): Promise<ApiTokenResponse>
  updateApiToken(app: FastifyInstance, input: ApiTokenUpdateRequest, request?: FastifyRequest): Promise<ApiTokenResponse>
  deleteApiToken(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
