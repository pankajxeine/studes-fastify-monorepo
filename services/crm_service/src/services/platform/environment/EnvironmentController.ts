import type { EnvironmentRequest } from './types/EnvironmentRequest'
import type { EnvironmentUpdateRequest } from './types/EnvironmentUpdateRequest'
import type { EnvironmentResponse } from './types/EnvironmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EnvironmentController {
  listEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EnvironmentResponse[]>>>
  createEnvironment(app: FastifyInstance, input: EnvironmentRequest, request?: FastifyRequest): Promise<EnvironmentResponse>
  getEnvironmentById(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentResponse>
  updateEnvironment(app: FastifyInstance, input: EnvironmentUpdateRequest, request?: FastifyRequest): Promise<EnvironmentResponse>
  deleteEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
