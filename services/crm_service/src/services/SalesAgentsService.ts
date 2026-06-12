import type { SalesAgent } from '../openapi/types/SalesAgent'
import type { CreateSalesAgentRequest } from '../openapi/types/CreateSalesAgentRequest'
import type { UpdateSalesAgentRequest } from '../openapi/types/UpdateSalesAgentRequest'
import type { SalesAgentListResponse } from '../openapi/types/SalesAgentListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SalesAgentsController } from '../openapi/controller/SalesAgentsController'

export class SalesAgentsService implements SalesAgentsController {
  public async listSalesAgents(app: FastifyInstance,request?: FastifyRequest): Promise<SalesAgentListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createSalesAgent(app: FastifyInstance, input: CreateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async updateSalesAgent(app: FastifyInstance, input: UpdateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
