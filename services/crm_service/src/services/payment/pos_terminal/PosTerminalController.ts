import type { PosTerminalRequest } from './types/PosTerminalRequest'
import type { PosTerminalUpdateRequest } from './types/PosTerminalUpdateRequest'
import type { PosTerminalResponse } from './types/PosTerminalResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PosTerminalController {
  listPosTerminal(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PosTerminalResponse[]>>>
  createPosTerminal(app: FastifyInstance, input: PosTerminalRequest, request?: FastifyRequest): Promise<PosTerminalResponse>
  getPosTerminalById(app: FastifyInstance, request?: FastifyRequest): Promise<PosTerminalResponse>
  updatePosTerminal(app: FastifyInstance, input: PosTerminalUpdateRequest, request?: FastifyRequest): Promise<PosTerminalResponse>
  deletePosTerminal(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
