import type { TemplateRequest } from './types/TemplateRequest'
import type { TemplateUpdateRequest } from './types/TemplateUpdateRequest'
import type { TemplateResponse } from './types/TemplateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TemplateController {
  listTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TemplateResponse[]>>>
  createTemplate(app: FastifyInstance, input: TemplateRequest, request?: FastifyRequest): Promise<TemplateResponse>
  getTemplateById(app: FastifyInstance, request?: FastifyRequest): Promise<TemplateResponse>
  updateTemplate(app: FastifyInstance, input: TemplateUpdateRequest, request?: FastifyRequest): Promise<TemplateResponse>
  deleteTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
