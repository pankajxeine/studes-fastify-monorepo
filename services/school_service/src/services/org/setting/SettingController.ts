import type { SettingRequest } from './types/SettingRequest'
import type { SettingUpdateRequest } from './types/SettingUpdateRequest'
import type { SettingResponse } from './types/SettingResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SettingController {
  listSetting(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SettingResponse[]>>>
  createSetting(app: FastifyInstance, input: SettingRequest, request?: FastifyRequest): Promise<SettingResponse>
  getSettingById(app: FastifyInstance, request?: FastifyRequest): Promise<SettingResponse>
  updateSetting(app: FastifyInstance, input: SettingUpdateRequest, request?: FastifyRequest): Promise<SettingResponse>
  deleteSetting(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
