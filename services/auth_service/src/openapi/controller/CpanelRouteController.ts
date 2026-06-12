import type { GetCpanelRouteDomainResponse } from '../types/GetCpanelRouteDomainResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CpanelRouteController {
  cpanelRouteDomain(headers?: RequestHeaders): Promise<GetCpanelRouteDomainResponse>
}
