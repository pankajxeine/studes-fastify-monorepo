import type { EmailTemplateFieldsRequest } from './types/EmailTemplateFieldsRequest'
import type { EmailTemplateFieldsResponse } from './types/EmailTemplateFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface EmailTemplateFieldsController {
  listEmailTemplateFields(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse[]>
  createEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse>
  getEmailTemplateFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse>
  updateEmailTemplateField(app: FastifyInstance, input: EmailTemplateFieldsRequest, request?: FastifyRequest): Promise<EmailTemplateFieldsResponse>
  deleteEmailTemplateField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
