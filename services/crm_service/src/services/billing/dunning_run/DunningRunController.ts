import type { DunningRunRequest } from './types/DunningRunRequest'
import type { DunningRunUpdateRequest } from './types/DunningRunUpdateRequest'
import type { DunningRunResponse } from './types/DunningRunResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DunningRunController {
  listDunningRun(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DunningRunResponse[]>>>
  createDunningRun(app: FastifyInstance, input: DunningRunRequest, request?: FastifyRequest): Promise<DunningRunResponse>
  getDunningRunById(app: FastifyInstance, request?: FastifyRequest): Promise<DunningRunResponse>
  updateDunningRun(app: FastifyInstance, input: DunningRunUpdateRequest, request?: FastifyRequest): Promise<DunningRunResponse>
  deleteDunningRun(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
