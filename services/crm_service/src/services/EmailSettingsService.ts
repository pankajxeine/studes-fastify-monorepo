import type { EmailSettings } from '../openapi/types/EmailSettings'
import type { UpdateEmailSettingsRequest } from '../openapi/types/UpdateEmailSettingsRequest'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { EmailSettingsController } from '../openapi/controller/EmailSettingsController'

export class EmailSettingsService implements EmailSettingsController {
  public async getEmailSettings(headers?: RequestHeaders): Promise<EmailSettings> {
    void headers
    throw new Error('Not implemented')
  }

  public async updateEmailSettings(input: UpdateEmailSettingsRequest, headers?: RequestHeaders): Promise<EmailSettings> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
