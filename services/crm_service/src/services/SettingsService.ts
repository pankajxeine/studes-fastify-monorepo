import type { GlobalSettings } from '../openapi/types/GlobalSettings'
import type { UpdateGlobalSettingsRequest } from '../openapi/types/UpdateGlobalSettingsRequest'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { SettingsController } from '../openapi/controller/SettingsController'

export class SettingsService implements SettingsController {
  public async getGlobalSettings(headers?: RequestHeaders): Promise<GlobalSettings> {
    void headers
    throw new Error('Not implemented')
  }

  public async updateGlobalSettings(input: UpdateGlobalSettingsRequest, headers?: RequestHeaders): Promise<GlobalSettings> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
