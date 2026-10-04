import type { EmailTemplateFieldsRequest } from './types/EmailTemplateFieldsRequest'
import type { EmailTemplateFieldsResponse } from './types/EmailTemplateFieldsResponse'
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

export interface EmailTemplateFieldsController {
  listEmailTemplateFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmailTemplateFieldsResponse[]>>>
  createEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse>
  getEmailTemplateFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse>
  updateEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse>
  deleteEmailTemplateField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
