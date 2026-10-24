import type { ProvisioningStepRequest } from './types/ProvisioningStepRequest'
import type { ProvisioningStepUpdateRequest } from './types/ProvisioningStepUpdateRequest'
import type { ProvisioningStepResponse } from './types/ProvisioningStepResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ProvisioningStepController {
  listProvisioningStep(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ProvisioningStepResponse[]>>>
  createProvisioningStep(app: FastifyInstance, input: ProvisioningStepRequest, request?: FastifyRequest): Promise<ProvisioningStepResponse>
  getProvisioningStepById(app: FastifyInstance, request?: FastifyRequest): Promise<ProvisioningStepResponse>
  updateProvisioningStep(app: FastifyInstance, input: ProvisioningStepUpdateRequest, request?: FastifyRequest): Promise<ProvisioningStepResponse>
  deleteProvisioningStep(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
