import type { GetCpanelUsersResponse } from '../types/GetCpanelUsersResponse'
import type { CpanelUser } from '../types/CpanelUser'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CpanelController {
  getCpanelUsers(headers?: RequestHeaders): Promise<GetCpanelUsersResponse>
}
