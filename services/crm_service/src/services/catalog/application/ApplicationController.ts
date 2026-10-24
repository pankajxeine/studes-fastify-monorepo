import type { ApplicationRequest } from './types/ApplicationRequest'
import type { ApplicationUpdateRequest } from './types/ApplicationUpdateRequest'
import type { ApplicationResponse } from './types/ApplicationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApplicationController {
  listApplication(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApplicationResponse[]>>>
  createApplication(app: FastifyInstance, input: ApplicationRequest, request?: FastifyRequest): Promise<ApplicationResponse>
  getApplicationById(app: FastifyInstance, request?: FastifyRequest): Promise<ApplicationResponse>
  updateApplication(app: FastifyInstance, input: ApplicationUpdateRequest, request?: FastifyRequest): Promise<ApplicationResponse>
  deleteApplication(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
