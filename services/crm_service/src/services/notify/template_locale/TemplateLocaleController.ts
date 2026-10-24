import type { TemplateLocaleRequest } from './types/TemplateLocaleRequest'
import type { TemplateLocaleUpdateRequest } from './types/TemplateLocaleUpdateRequest'
import type { TemplateLocaleResponse } from './types/TemplateLocaleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TemplateLocaleController {
  listTemplateLocale(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TemplateLocaleResponse[]>>>
  createTemplateLocale(app: FastifyInstance, input: TemplateLocaleRequest, request?: FastifyRequest): Promise<TemplateLocaleResponse>
  getTemplateLocaleById(app: FastifyInstance, request?: FastifyRequest): Promise<TemplateLocaleResponse>
  updateTemplateLocale(app: FastifyInstance, input: TemplateLocaleUpdateRequest, request?: FastifyRequest): Promise<TemplateLocaleResponse>
  deleteTemplateLocale(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
