import type { EmailSettings } from '../types/EmailSettings'
import type { UpdateEmailSettingsRequest } from '../types/UpdateEmailSettingsRequest'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface EmailSettingsController {
  getEmailSettings(app: FastifyInstance, request?: FastifyRequest): Promise<EmailSettings>
  updateEmailSettings(app: FastifyInstance, input: UpdateEmailSettingsRequest, request?: FastifyRequest): Promise<EmailSettings>
}
