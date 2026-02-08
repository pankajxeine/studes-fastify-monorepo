import type { EmailSettings } from '../types/EmailSettings'
import type { UpdateEmailSettingsRequest } from '../types/UpdateEmailSettingsRequest'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface EmailSettingsController {
  getEmailSettings(headers?: RequestHeaders): Promise<EmailSettings>
  updateEmailSettings(input: UpdateEmailSettingsRequest, headers?: RequestHeaders): Promise<EmailSettings>
}
