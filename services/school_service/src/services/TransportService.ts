import type { TransportRouteCreateRequest } from '../openapi/types/TransportRouteCreateRequest'
import type { TransportRoute } from '../openapi/types/TransportRoute'
import type { TransportRouteList } from '../openapi/types/TransportRouteList'
import type { TransportVehicleCreateRequest } from '../openapi/types/TransportVehicleCreateRequest'
import type { TransportVehicle } from '../openapi/types/TransportVehicle'
import type { TransportAssignmentCreateRequest } from '../openapi/types/TransportAssignmentCreateRequest'
import type { TransportAssignment } from '../openapi/types/TransportAssignment'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { TransportController } from '../openapi/controller/TransportController'

export class TransportService implements TransportController {
  public async listTransportRoutes(headers?: RequestHeaders): Promise<TransportRouteList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createTransportRoute(input: TransportRouteCreateRequest, headers?: RequestHeaders): Promise<TransportRoute> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async createTransportVehicle(input: TransportVehicleCreateRequest, headers?: RequestHeaders): Promise<TransportVehicle> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async assignTransport(input: TransportAssignmentCreateRequest, headers?: RequestHeaders): Promise<TransportAssignment> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
