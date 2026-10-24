import type { NotificationPreferenceRequest } from './types/NotificationPreferenceRequest'
import type { NotificationPreferenceUpdateRequest } from './types/NotificationPreferenceUpdateRequest'
import type { NotificationPreferenceResponse } from './types/NotificationPreferenceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NotificationPreferenceController {
  listNotificationPreference(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationPreferenceResponse[]>>>
  createNotificationPreference(app: FastifyInstance, input: NotificationPreferenceRequest, request?: FastifyRequest): Promise<NotificationPreferenceResponse>
  getNotificationPreferenceById(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationPreferenceResponse>
  updateNotificationPreference(app: FastifyInstance, input: NotificationPreferenceUpdateRequest, request?: FastifyRequest): Promise<NotificationPreferenceResponse>
  deleteNotificationPreference(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
