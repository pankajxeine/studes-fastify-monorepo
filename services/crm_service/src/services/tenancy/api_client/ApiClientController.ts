import type { ApiClientRequest } from './types/ApiClientRequest'
import type { ApiClientUpdateRequest } from './types/ApiClientUpdateRequest'
import type { ApiClientResponse } from './types/ApiClientResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApiClientController {
  listApiClient(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApiClientResponse[]>>>
  createApiClient(app: FastifyInstance, input: ApiClientRequest, request?: FastifyRequest): Promise<ApiClientResponse>
  getApiClientById(app: FastifyInstance, request?: FastifyRequest): Promise<ApiClientResponse>
  updateApiClient(app: FastifyInstance, input: ApiClientUpdateRequest, request?: FastifyRequest): Promise<ApiClientResponse>
  deleteApiClient(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
