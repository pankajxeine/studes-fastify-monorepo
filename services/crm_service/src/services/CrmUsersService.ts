import type { CrmUser } from '../openapi/types/CrmUser'
import type { CreateCrmUserRequest } from '../openapi/types/CreateCrmUserRequest'
import type { UpdateCrmUserRequest } from '../openapi/types/UpdateCrmUserRequest'
import type { CrmUserListResponse } from '../openapi/types/CrmUserListResponse'
import type { ErrorResponse } from '../openapi/types/ErrorResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CrmUsersController } from '../openapi/controller/CrmUsersController'

export class CrmUsersService implements CrmUsersController {
  public async listCrmUsers(headers?: RequestHeaders): Promise<CrmUserListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createCrmUser(input: CreateCrmUserRequest, headers?: RequestHeaders): Promise<CrmUser> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async getCrmUser(headers?: RequestHeaders): Promise<CrmUser> {
    void headers
    throw new Error('Not implemented')
  }

  public async updateCrmUser(input: UpdateCrmUserRequest, headers?: RequestHeaders): Promise<CrmUser> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async deleteCrmUser(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }
}
