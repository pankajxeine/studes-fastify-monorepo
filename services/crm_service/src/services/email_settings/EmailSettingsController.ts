import type { EmailSettings } from './types/EmailSettings'
import type { UpdateEmailSettingsRequest } from './types/UpdateEmailSettingsRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface EmailSettingsController {
  getEmailSettings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EmailSettings>>>
  updateEmailSettings(app: FastifyInstance, input: UpdateEmailSettingsRequest, request?: FastifyRequest): Promise<EmailSettings>
}
