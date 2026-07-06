import type { EmailTemplateModulesRequest } from './types/EmailTemplateModulesRequest'
import type { EmailTemplateModulesResponse } from './types/EmailTemplateModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface EmailTemplateModulesController {
  listEmailTemplateModules(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateModulesResponse[]>
  createEmailTemplateModule(app: FastifyInstance, input: EmailTemplateModulesRequest, request?: FastifyRequest): Promise<EmailTemplateModulesResponse>
  getEmailTemplateModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<EmailTemplateModulesResponse>
  updateEmailTemplateModule(app: FastifyInstance, input: EmailTemplateModulesRequest, request?: FastifyRequest): Promise<EmailTemplateModulesResponse>
  deleteEmailTemplateModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
