import type { TransportRouteCreateRequest } from '../types/TransportRouteCreateRequest'
import type { TransportRoute } from '../types/TransportRoute'
import type { TransportRouteList } from '../types/TransportRouteList'
import type { TransportVehicleCreateRequest } from '../types/TransportVehicleCreateRequest'
import type { TransportVehicle } from '../types/TransportVehicle'
import type { TransportAssignmentCreateRequest } from '../types/TransportAssignmentCreateRequest'
import type { TransportAssignment } from '../types/TransportAssignment'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface TransportController {
  listTransportRoutes(headers?: RequestHeaders): Promise<TransportRouteList>
  createTransportRoute(input: TransportRouteCreateRequest, headers?: RequestHeaders): Promise<TransportRoute>
  createTransportVehicle(input: TransportVehicleCreateRequest, headers?: RequestHeaders): Promise<TransportVehicle>
  assignTransport(input: TransportAssignmentCreateRequest, headers?: RequestHeaders): Promise<TransportAssignment>
}
