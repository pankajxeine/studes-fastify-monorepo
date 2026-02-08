import type { HostelRoomCreateRequest } from '../openapi/types/HostelRoomCreateRequest'
import type { HostelRoom } from '../openapi/types/HostelRoom'
import type { HostelRoomList } from '../openapi/types/HostelRoomList'
import type { HostelAllocationCreateRequest } from '../openapi/types/HostelAllocationCreateRequest'
import type { HostelAllocation } from '../openapi/types/HostelAllocation'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { HostelController } from '../openapi/controller/HostelController'

export class HostelService implements HostelController {
  public async listHostelRooms(headers?: RequestHeaders): Promise<HostelRoomList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createHostelRoom(input: HostelRoomCreateRequest, headers?: RequestHeaders): Promise<HostelRoom> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async allocateHostelRoom(input: HostelAllocationCreateRequest, headers?: RequestHeaders): Promise<HostelAllocation> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
