import type { EmailTemplate } from './types/EmailTemplate'
import type { CreateEmailTemplateRequest } from './types/CreateEmailTemplateRequest'
import type { UpdateEmailTemplateRequest } from './types/UpdateEmailTemplateRequest'
import type { EmailTemplateListResponse } from './types/EmailTemplateListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface EmailTemplatesController {
  listEmailTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmailTemplateListResponse>>>
  createEmailTemplate(app: FastifyInstance, input: CreateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate>
  updateEmailTemplate(app: FastifyInstance, input: UpdateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate>
  deleteEmailTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
