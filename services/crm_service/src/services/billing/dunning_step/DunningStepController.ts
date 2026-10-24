import type { DunningStepRequest } from './types/DunningStepRequest'
import type { DunningStepUpdateRequest } from './types/DunningStepUpdateRequest'
import type { DunningStepResponse } from './types/DunningStepResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DunningStepController {
  listDunningStep(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DunningStepResponse[]>>>
  createDunningStep(app: FastifyInstance, input: DunningStepRequest, request?: FastifyRequest): Promise<DunningStepResponse>
  getDunningStepById(app: FastifyInstance, request?: FastifyRequest): Promise<DunningStepResponse>
  updateDunningStep(app: FastifyInstance, input: DunningStepUpdateRequest, request?: FastifyRequest): Promise<DunningStepResponse>
  deleteDunningStep(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
