import type { GlobalSettings } from './types/GlobalSettings'
import type { UpdateGlobalSettingsRequest } from './types/UpdateGlobalSettingsRequest'
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

export interface SettingsController {
  getGlobalSettings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GlobalSettings>>>
  updateGlobalSettings(app: FastifyInstance, input: UpdateGlobalSettingsRequest, request?: FastifyRequest): Promise<GlobalSettings>
}
