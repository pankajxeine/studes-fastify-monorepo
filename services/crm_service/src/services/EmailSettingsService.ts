import type { EmailSettings } from '../openapi/types/EmailSettings'
import type { UpdateEmailSettingsRequest } from '../openapi/types/UpdateEmailSettingsRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EmailSettingsController } from '../openapi/controller/EmailSettingsController'

export class EmailSettingsService implements EmailSettingsController {
  public async getEmailSettings(app: FastifyInstance,request?: FastifyRequest): Promise<EmailSettings> {
    void request
    throw new Error('Not implemented')
  }

  public async updateEmailSettings(app: FastifyInstance, input: UpdateEmailSettingsRequest, request?: FastifyRequest): Promise<EmailSettings> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
