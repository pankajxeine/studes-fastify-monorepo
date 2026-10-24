import type { BedAllocationRequest } from './types/BedAllocationRequest'
import type { BedAllocationUpdateRequest } from './types/BedAllocationUpdateRequest'
import type { BedAllocationResponse } from './types/BedAllocationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BedAllocationController {
  listBedAllocation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BedAllocationResponse[]>>>
  createBedAllocation(app: FastifyInstance, input: BedAllocationRequest, request?: FastifyRequest): Promise<BedAllocationResponse>
  getBedAllocationById(app: FastifyInstance, request?: FastifyRequest): Promise<BedAllocationResponse>
  updateBedAllocation(app: FastifyInstance, input: BedAllocationUpdateRequest, request?: FastifyRequest): Promise<BedAllocationResponse>
  deleteBedAllocation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
