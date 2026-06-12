import type { GlobalSettings } from '../types/GlobalSettings'
import type { UpdateGlobalSettingsRequest } from '../types/UpdateGlobalSettingsRequest'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface SettingsController {
  getGlobalSettings(app: FastifyInstance, request?: FastifyRequest): Promise<GlobalSettings>
  updateGlobalSettings(app: FastifyInstance, input: UpdateGlobalSettingsRequest, request?: FastifyRequest): Promise<GlobalSettings>
}
