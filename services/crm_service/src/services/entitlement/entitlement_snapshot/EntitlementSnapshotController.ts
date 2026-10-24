import type { EntitlementSnapshotRequest } from './types/EntitlementSnapshotRequest'
import type { EntitlementSnapshotUpdateRequest } from './types/EntitlementSnapshotUpdateRequest'
import type { EntitlementSnapshotResponse } from './types/EntitlementSnapshotResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EntitlementSnapshotController {
  listEntitlementSnapshot(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EntitlementSnapshotResponse[]>>>
  createEntitlementSnapshot(app: FastifyInstance, input: EntitlementSnapshotRequest, request?: FastifyRequest): Promise<EntitlementSnapshotResponse>
  getEntitlementSnapshotById(app: FastifyInstance, request?: FastifyRequest): Promise<EntitlementSnapshotResponse>
  updateEntitlementSnapshot(app: FastifyInstance, input: EntitlementSnapshotUpdateRequest, request?: FastifyRequest): Promise<EntitlementSnapshotResponse>
  deleteEntitlementSnapshot(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
