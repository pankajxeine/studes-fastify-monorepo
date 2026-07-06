import type { SalesAgentsRequest } from './types/SalesAgentsRequest'
import type { SalesAgentsResponse } from './types/SalesAgentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SalesAgentsController {
  listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse[]>
  createSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse>
  getSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse>
  updateSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse>
  deleteSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
