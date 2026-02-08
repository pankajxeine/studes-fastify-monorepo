import type { CpanelUser } from '../openapi/types/CpanelUser'
import type { CreateCpanelUserRequest } from '../openapi/types/CreateCpanelUserRequest'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CpanelUsersController } from '../openapi/controller/CpanelUsersController'

export class CpanelUsersService implements CpanelUsersController {
  public async createSalesCpanelUser(input: CreateCpanelUserRequest, headers?: RequestHeaders): Promise<CpanelUser> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
