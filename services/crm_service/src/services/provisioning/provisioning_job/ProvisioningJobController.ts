import type { ProvisioningJobRequest } from './types/ProvisioningJobRequest'
import type { ProvisioningJobUpdateRequest } from './types/ProvisioningJobUpdateRequest'
import type { ProvisioningJobResponse } from './types/ProvisioningJobResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ProvisioningJobController {
  listProvisioningJob(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ProvisioningJobResponse[]>>>
  createProvisioningJob(app: FastifyInstance, input: ProvisioningJobRequest, request?: FastifyRequest): Promise<ProvisioningJobResponse>
  getProvisioningJobById(app: FastifyInstance, request?: FastifyRequest): Promise<ProvisioningJobResponse>
  updateProvisioningJob(app: FastifyInstance, input: ProvisioningJobUpdateRequest, request?: FastifyRequest): Promise<ProvisioningJobResponse>
  deleteProvisioningJob(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
