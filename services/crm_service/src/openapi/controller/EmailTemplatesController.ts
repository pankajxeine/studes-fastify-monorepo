import type { EmailTemplate } from '../types/EmailTemplate'
import type { CreateEmailTemplateRequest } from '../types/CreateEmailTemplateRequest'
import type { UpdateEmailTemplateRequest } from '../types/UpdateEmailTemplateRequest'
import type { EmailTemplateListResponse } from '../types/EmailTemplateListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface EmailTemplatesController {
  listEmailTemplates(headers?: RequestHeaders): Promise<EmailTemplateListResponse>
  createEmailTemplate(input: CreateEmailTemplateRequest, headers?: RequestHeaders): Promise<EmailTemplate>
  updateEmailTemplate(input: UpdateEmailTemplateRequest, headers?: RequestHeaders): Promise<EmailTemplate>
  deleteEmailTemplate(headers?: RequestHeaders): Promise<void>
}
