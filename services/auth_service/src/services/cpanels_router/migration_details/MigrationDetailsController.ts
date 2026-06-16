import type { MigrationDetailsRequest } from './types/MigrationDetailsRequest'
import type { MigrationDetailsResponse } from './types/MigrationDetailsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface MigrationDetailsController {
  listMigrationDetails(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse[]>
  createMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse>
  getMigrationDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse>
  updateMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse>
  deleteMigrationDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
