import type { HostelRequest } from './types/HostelRequest'
import type { HostelUpdateRequest } from './types/HostelUpdateRequest'
import type { HostelResponse } from './types/HostelResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface HostelController {
  listHostel(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HostelResponse[]>>>
  createHostel(app: FastifyInstance, input: HostelRequest, request?: FastifyRequest): Promise<HostelResponse>
  getHostelById(app: FastifyInstance, request?: FastifyRequest): Promise<HostelResponse>
  updateHostel(app: FastifyInstance, input: HostelUpdateRequest, request?: FastifyRequest): Promise<HostelResponse>
  deleteHostel(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
