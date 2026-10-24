import type { LibraryMembershipRequest } from './types/LibraryMembershipRequest'
import type { LibraryMembershipUpdateRequest } from './types/LibraryMembershipUpdateRequest'
import type { LibraryMembershipResponse } from './types/LibraryMembershipResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LibraryMembershipController {
  listLibraryMembership(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LibraryMembershipResponse[]>>>
  createLibraryMembership(app: FastifyInstance, input: LibraryMembershipRequest, request?: FastifyRequest): Promise<LibraryMembershipResponse>
  getLibraryMembershipById(app: FastifyInstance, request?: FastifyRequest): Promise<LibraryMembershipResponse>
  updateLibraryMembership(app: FastifyInstance, input: LibraryMembershipUpdateRequest, request?: FastifyRequest): Promise<LibraryMembershipResponse>
  deleteLibraryMembership(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
