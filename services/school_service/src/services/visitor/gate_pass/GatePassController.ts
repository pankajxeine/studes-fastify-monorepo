import type { GatePassRequest } from './types/GatePassRequest'
import type { GatePassUpdateRequest } from './types/GatePassUpdateRequest'
import type { GatePassResponse } from './types/GatePassResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GatePassController {
  listGatePass(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GatePassResponse[]>>>
  createGatePass(app: FastifyInstance, input: GatePassRequest, request?: FastifyRequest): Promise<GatePassResponse>
  getGatePassById(app: FastifyInstance, request?: FastifyRequest): Promise<GatePassResponse>
  updateGatePass(app: FastifyInstance, input: GatePassUpdateRequest, request?: FastifyRequest): Promise<GatePassResponse>
  deleteGatePass(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
