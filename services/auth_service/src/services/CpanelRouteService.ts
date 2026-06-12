import type { GetCpanelRouteDomainResponse } from '../openapi/types/GetCpanelRouteDomainResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CpanelRouteController } from '../openapi/controller/CpanelRouteController'

export class CpanelRouteService implements CpanelRouteController {
  public async cpanelRouteDomain(headers?: RequestHeaders): Promise<GetCpanelRouteDomainResponse> {
    void headers
    throw new Error('Not implemented')
  }
}
