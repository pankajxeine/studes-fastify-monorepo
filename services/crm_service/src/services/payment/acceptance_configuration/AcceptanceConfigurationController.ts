import type { AcceptanceConfigurationRequest } from './types/AcceptanceConfigurationRequest'
import type { AcceptanceConfigurationUpdateRequest } from './types/AcceptanceConfigurationUpdateRequest'
import type { AcceptanceConfigurationResponse } from './types/AcceptanceConfigurationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AcceptanceConfigurationController {
  listAcceptanceConfiguration(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AcceptanceConfigurationResponse[]>>>
  createAcceptanceConfiguration(app: FastifyInstance, input: AcceptanceConfigurationRequest, request?: FastifyRequest): Promise<AcceptanceConfigurationResponse>
  getAcceptanceConfigurationById(app: FastifyInstance, request?: FastifyRequest): Promise<AcceptanceConfigurationResponse>
  updateAcceptanceConfiguration(app: FastifyInstance, input: AcceptanceConfigurationUpdateRequest, request?: FastifyRequest): Promise<AcceptanceConfigurationResponse>
  deleteAcceptanceConfiguration(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
