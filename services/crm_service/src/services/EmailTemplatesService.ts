import type { EmailTemplate } from '../openapi/types/EmailTemplate'
import type { CreateEmailTemplateRequest } from '../openapi/types/CreateEmailTemplateRequest'
import type { UpdateEmailTemplateRequest } from '../openapi/types/UpdateEmailTemplateRequest'
import type { EmailTemplateListResponse } from '../openapi/types/EmailTemplateListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { EmailTemplatesController } from '../openapi/controller/EmailTemplatesController'

export class EmailTemplatesService implements EmailTemplatesController {
  public async listEmailTemplates(headers?: RequestHeaders): Promise<EmailTemplateListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createEmailTemplate(input: CreateEmailTemplateRequest, headers?: RequestHeaders): Promise<EmailTemplate> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async updateEmailTemplate(input: UpdateEmailTemplateRequest, headers?: RequestHeaders): Promise<EmailTemplate> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async deleteEmailTemplate(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }
}
