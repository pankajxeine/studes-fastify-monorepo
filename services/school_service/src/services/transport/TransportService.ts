import type { TransportRouteCreateRequest } from './types/TransportRouteCreateRequest'
import type { TransportRoute } from './types/TransportRoute'
import type { TransportRouteList } from './types/TransportRouteList'
import type { TransportVehicleCreateRequest } from './types/TransportVehicleCreateRequest'
import type { TransportVehicle } from './types/TransportVehicle'
import type { TransportAssignmentCreateRequest } from './types/TransportAssignmentCreateRequest'
import type { TransportAssignment } from './types/TransportAssignment'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TransportController, ListItem, PaginatedResponse } from './TransportController'

export class TransportService implements TransportController {
      public async listTransportRoutes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TransportRouteList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createTransportRoute(app: FastifyInstance, input: TransportRouteCreateRequest, request?: FastifyRequest): Promise<TransportRoute> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createTransportVehicle(app: FastifyInstance, input: TransportVehicleCreateRequest, request?: FastifyRequest): Promise<TransportVehicle> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async assignTransport(app: FastifyInstance, input: TransportAssignmentCreateRequest, request?: FastifyRequest): Promise<TransportAssignment> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
