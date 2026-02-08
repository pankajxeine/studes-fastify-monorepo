import type { CpanelUser } from '../types/CpanelUser'
import type { CreateCpanelUserRequest } from '../types/CreateCpanelUserRequest'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CpanelUsersController {
  createSalesCpanelUser(input: CreateCpanelUserRequest, headers?: RequestHeaders): Promise<CpanelUser>
}
