import type { SalesAgent } from '../types/SalesAgent'
import type { CreateSalesAgentRequest } from '../types/CreateSalesAgentRequest'
import type { UpdateSalesAgentRequest } from '../types/UpdateSalesAgentRequest'
import type { SalesAgentListResponse } from '../types/SalesAgentListResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface SalesAgentsController {
  listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentListResponse>
  createSalesAgent(app: FastifyInstance, input: CreateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent>
  updateSalesAgent(app: FastifyInstance, input: UpdateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent>
}
