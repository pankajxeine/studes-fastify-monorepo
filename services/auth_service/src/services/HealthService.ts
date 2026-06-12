import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { HealthDbResponse } from '../openapi/types/HealthDbResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { HealthController } from '../openapi/controller/HealthController'

export class HealthService implements HealthController {
  public async authHealth(headers?: RequestHeaders): Promise<HealthResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async authHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse> {
    void headers
    throw new Error('Not implemented')
  }
}
