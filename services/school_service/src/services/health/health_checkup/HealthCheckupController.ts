import type { HealthCheckupRequest } from './types/HealthCheckupRequest'
import type { HealthCheckupUpdateRequest } from './types/HealthCheckupUpdateRequest'
import type { HealthCheckupResponse } from './types/HealthCheckupResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface HealthCheckupController {
  listHealthCheckup(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HealthCheckupResponse[]>>>
  createHealthCheckup(app: FastifyInstance, input: HealthCheckupRequest, request?: FastifyRequest): Promise<HealthCheckupResponse>
  getHealthCheckupById(app: FastifyInstance, request?: FastifyRequest): Promise<HealthCheckupResponse>
  updateHealthCheckup(app: FastifyInstance, input: HealthCheckupUpdateRequest, request?: FastifyRequest): Promise<HealthCheckupResponse>
  deleteHealthCheckup(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
