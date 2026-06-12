import type { HostelRoomCreateRequest } from '../openapi/types/HostelRoomCreateRequest'
import type { HostelRoom } from '../openapi/types/HostelRoom'
import type { HostelRoomList } from '../openapi/types/HostelRoomList'
import type { HostelAllocationCreateRequest } from '../openapi/types/HostelAllocationCreateRequest'
import type { HostelAllocation } from '../openapi/types/HostelAllocation'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { HostelController } from '../openapi/controller/HostelController'

export class HostelService implements HostelController {
  public async listHostelRooms(app: FastifyInstance,request?: FastifyRequest): Promise<HostelRoomList> {
    void request
    throw new Error('Not implemented')
  }

  public async createHostelRoom(app: FastifyInstance, input: HostelRoomCreateRequest, request?: FastifyRequest): Promise<HostelRoom> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async allocateHostelRoom(app: FastifyInstance, input: HostelAllocationCreateRequest, request?: FastifyRequest): Promise<HostelAllocation> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
