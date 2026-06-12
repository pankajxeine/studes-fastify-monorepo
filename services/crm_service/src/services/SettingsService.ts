import type { GlobalSettings } from '../openapi/types/GlobalSettings'
import type { UpdateGlobalSettingsRequest } from '../openapi/types/UpdateGlobalSettingsRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SettingsController } from '../openapi/controller/SettingsController'

export class SettingsService implements SettingsController {
  public async getGlobalSettings(app: FastifyInstance,request?: FastifyRequest): Promise<GlobalSettings> {
    void request
    throw new Error('Not implemented')
  }

  public async updateGlobalSettings(app: FastifyInstance, input: UpdateGlobalSettingsRequest, request?: FastifyRequest): Promise<GlobalSettings> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
