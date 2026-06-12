import type { GetCpanelUsersResponse } from '../openapi/types/GetCpanelUsersResponse'
import type { CpanelUser } from '../openapi/types/CpanelUser'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CpanelController } from '../openapi/controller/CpanelController'

export class CpanelService implements CpanelController {
  public async getCpanelUsers(headers?: RequestHeaders): Promise<GetCpanelUsersResponse> {
    void headers
    throw new Error('Not implemented')
  }
}
