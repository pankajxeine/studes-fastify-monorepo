import type { GlobalSettings } from '../types/GlobalSettings'
import type { UpdateGlobalSettingsRequest } from '../types/UpdateGlobalSettingsRequest'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface SettingsController {
  getGlobalSettings(headers?: RequestHeaders): Promise<GlobalSettings>
  updateGlobalSettings(input: UpdateGlobalSettingsRequest, headers?: RequestHeaders): Promise<GlobalSettings>
}
