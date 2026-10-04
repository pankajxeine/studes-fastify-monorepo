import type { HostelRoomCreateRequest } from './types/HostelRoomCreateRequest'
import type { HostelRoom } from './types/HostelRoom'
import type { HostelRoomList } from './types/HostelRoomList'
import type { HostelAllocationCreateRequest } from './types/HostelAllocationCreateRequest'
import type { HostelAllocation } from './types/HostelAllocation'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { HostelController, ListItem, PaginatedResponse } from './HostelController'

export class HostelService implements HostelController {
      public async listHostelRooms(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HostelRoomList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createHostelRoom(app: FastifyInstance, input: HostelRoomCreateRequest, request?: FastifyRequest): Promise<HostelRoom> {
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

      public async allocateHostelRoom(app: FastifyInstance, input: HostelAllocationCreateRequest, request?: FastifyRequest): Promise<HostelAllocation> {
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
