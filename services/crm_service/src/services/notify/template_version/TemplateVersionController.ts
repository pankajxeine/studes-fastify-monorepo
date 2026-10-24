import type { TemplateVersionRequest } from './types/TemplateVersionRequest'
import type { TemplateVersionUpdateRequest } from './types/TemplateVersionUpdateRequest'
import type { TemplateVersionResponse } from './types/TemplateVersionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TemplateVersionController {
  listTemplateVersion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TemplateVersionResponse[]>>>
  createTemplateVersion(app: FastifyInstance, input: TemplateVersionRequest, request?: FastifyRequest): Promise<TemplateVersionResponse>
  getTemplateVersionById(app: FastifyInstance, request?: FastifyRequest): Promise<TemplateVersionResponse>
  updateTemplateVersion(app: FastifyInstance, input: TemplateVersionUpdateRequest, request?: FastifyRequest): Promise<TemplateVersionResponse>
  deleteTemplateVersion(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
