import type { HostelRoomCreateRequest } from '../types/HostelRoomCreateRequest'
import type { HostelRoom } from '../types/HostelRoom'
import type { HostelRoomList } from '../types/HostelRoomList'
import type { HostelAllocationCreateRequest } from '../types/HostelAllocationCreateRequest'
import type { HostelAllocation } from '../types/HostelAllocation'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface HostelController {
  listHostelRooms(headers?: RequestHeaders): Promise<HostelRoomList>
  createHostelRoom(input: HostelRoomCreateRequest, headers?: RequestHeaders): Promise<HostelRoom>
  allocateHostelRoom(input: HostelAllocationCreateRequest, headers?: RequestHeaders): Promise<HostelAllocation>
}
