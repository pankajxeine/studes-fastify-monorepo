import type { HostelRoomCreateRequest } from '../types/HostelRoomCreateRequest'
import type { HostelRoom } from '../types/HostelRoom'
import type { HostelRoomList } from '../types/HostelRoomList'
import type { HostelAllocationCreateRequest } from '../types/HostelAllocationCreateRequest'
import type { HostelAllocation } from '../types/HostelAllocation'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface HostelController {
  listHostelRooms(app: FastifyInstance, request?: FastifyRequest): Promise<HostelRoomList>
  createHostelRoom(app: FastifyInstance, input: HostelRoomCreateRequest, request?: FastifyRequest): Promise<HostelRoom>
  allocateHostelRoom(app: FastifyInstance, input: HostelAllocationCreateRequest, request?: FastifyRequest): Promise<HostelAllocation>
}
