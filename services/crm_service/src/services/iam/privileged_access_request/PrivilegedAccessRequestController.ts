import type { PrivilegedAccessRequestRequest } from './types/PrivilegedAccessRequestRequest'
import type { PrivilegedAccessRequestUpdateRequest } from './types/PrivilegedAccessRequestUpdateRequest'
import type { PrivilegedAccessRequestResponse } from './types/PrivilegedAccessRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PrivilegedAccessRequestController {
  listPrivilegedAccessRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PrivilegedAccessRequestResponse[]>>>
  createPrivilegedAccessRequest(app: FastifyInstance, input: PrivilegedAccessRequestRequest, request?: FastifyRequest): Promise<PrivilegedAccessRequestResponse>
  getPrivilegedAccessRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<PrivilegedAccessRequestResponse>
  updatePrivilegedAccessRequest(app: FastifyInstance, input: PrivilegedAccessRequestUpdateRequest, request?: FastifyRequest): Promise<PrivilegedAccessRequestResponse>
  deletePrivilegedAccessRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
