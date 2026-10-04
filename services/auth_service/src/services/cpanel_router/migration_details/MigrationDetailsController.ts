import type { MigrationDetailsRequest } from './types/MigrationDetailsRequest'
import type { MigrationDetailsResponse } from './types/MigrationDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface MigrationDetailsController {
  listMigrationDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MigrationDetailsResponse[]>>>
  createMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse>
  getMigrationDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse>
  updateMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse>
  deleteMigrationDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
