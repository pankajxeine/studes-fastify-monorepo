import type { ConfigDefinitionRequest } from './types/ConfigDefinitionRequest'
import type { ConfigDefinitionUpdateRequest } from './types/ConfigDefinitionUpdateRequest'
import type { ConfigDefinitionResponse } from './types/ConfigDefinitionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ConfigDefinitionController {
  listConfigDefinition(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ConfigDefinitionResponse[]>>>
  createConfigDefinition(app: FastifyInstance, input: ConfigDefinitionRequest, request?: FastifyRequest): Promise<ConfigDefinitionResponse>
  getConfigDefinitionById(app: FastifyInstance, request?: FastifyRequest): Promise<ConfigDefinitionResponse>
  updateConfigDefinition(app: FastifyInstance, input: ConfigDefinitionUpdateRequest, request?: FastifyRequest): Promise<ConfigDefinitionResponse>
  deleteConfigDefinition(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
