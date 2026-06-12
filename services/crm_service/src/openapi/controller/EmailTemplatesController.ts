import type { EmailTemplate } from '../types/EmailTemplate'
import type { CreateEmailTemplateRequest } from '../types/CreateEmailTemplateRequest'
import type { UpdateEmailTemplateRequest } from '../types/UpdateEmailTemplateRequest'
import type { EmailTemplateListResponse } from '../types/EmailTemplateListResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface EmailTemplatesController {
  listEmailTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateListResponse>
  createEmailTemplate(app: FastifyInstance, input: CreateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate>
  updateEmailTemplate(app: FastifyInstance, input: UpdateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate>
  deleteEmailTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
