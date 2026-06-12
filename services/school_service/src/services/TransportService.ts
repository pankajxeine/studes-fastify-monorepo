import type { TransportRouteCreateRequest } from '../openapi/types/TransportRouteCreateRequest'
import type { TransportRoute } from '../openapi/types/TransportRoute'
import type { TransportRouteList } from '../openapi/types/TransportRouteList'
import type { TransportVehicleCreateRequest } from '../openapi/types/TransportVehicleCreateRequest'
import type { TransportVehicle } from '../openapi/types/TransportVehicle'
import type { TransportAssignmentCreateRequest } from '../openapi/types/TransportAssignmentCreateRequest'
import type { TransportAssignment } from '../openapi/types/TransportAssignment'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TransportController } from '../openapi/controller/TransportController'

export class TransportService implements TransportController {
  public async listTransportRoutes(app: FastifyInstance,request?: FastifyRequest): Promise<TransportRouteList> {
    void request
    throw new Error('Not implemented')
  }

  public async createTransportRoute(app: FastifyInstance, input: TransportRouteCreateRequest, request?: FastifyRequest): Promise<TransportRoute> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async createTransportVehicle(app: FastifyInstance, input: TransportVehicleCreateRequest, request?: FastifyRequest): Promise<TransportVehicle> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async assignTransport(app: FastifyInstance, input: TransportAssignmentCreateRequest, request?: FastifyRequest): Promise<TransportAssignment> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
