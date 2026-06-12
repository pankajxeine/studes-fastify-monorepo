import type { EmailTemplate } from '../openapi/types/EmailTemplate'
import type { CreateEmailTemplateRequest } from '../openapi/types/CreateEmailTemplateRequest'
import type { UpdateEmailTemplateRequest } from '../openapi/types/UpdateEmailTemplateRequest'
import type { EmailTemplateListResponse } from '../openapi/types/EmailTemplateListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailTemplatesController } from '../openapi/controller/EmailTemplatesController'

export class EmailTemplatesService implements EmailTemplatesController {
  public async listEmailTemplates(app: FastifyInstance,request?: FastifyRequest): Promise<EmailTemplateListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createEmailTemplate(app: FastifyInstance, input: CreateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async updateEmailTemplate(app: FastifyInstance, input: UpdateEmailTemplateRequest, request?: FastifyRequest): Promise<EmailTemplate> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async deleteEmailTemplate(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }
}
