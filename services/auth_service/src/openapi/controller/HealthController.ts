import type { HealthResponse } from '../types/HealthResponse'
import type { HealthDbResponse } from '../types/HealthDbResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface HealthController {
  authHealth(headers?: RequestHeaders): Promise<HealthResponse>
  authHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse>
}
