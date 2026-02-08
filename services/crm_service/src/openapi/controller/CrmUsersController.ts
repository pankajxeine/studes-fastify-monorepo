import type { CrmUser } from '../types/CrmUser'
import type { CreateCrmUserRequest } from '../types/CreateCrmUserRequest'
import type { UpdateCrmUserRequest } from '../types/UpdateCrmUserRequest'
import type { CrmUserListResponse } from '../types/CrmUserListResponse'
import type { ErrorResponse } from '../types/ErrorResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CrmUsersController {
  listCrmUsers(headers?: RequestHeaders): Promise<CrmUserListResponse>
  createCrmUser(input: CreateCrmUserRequest, headers?: RequestHeaders): Promise<CrmUser>
  getCrmUser(headers?: RequestHeaders): Promise<CrmUser>
  updateCrmUser(input: UpdateCrmUserRequest, headers?: RequestHeaders): Promise<CrmUser>
  deleteCrmUser(headers?: RequestHeaders): Promise<void>
}
