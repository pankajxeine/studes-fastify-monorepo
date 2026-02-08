import type { SalesAgent } from '../openapi/types/SalesAgent'
import type { CreateSalesAgentRequest } from '../openapi/types/CreateSalesAgentRequest'
import type { UpdateSalesAgentRequest } from '../openapi/types/UpdateSalesAgentRequest'
import type { SalesAgentListResponse } from '../openapi/types/SalesAgentListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { SalesAgentsController } from '../openapi/controller/SalesAgentsController'

export class SalesAgentsService implements SalesAgentsController {
  public async listSalesAgents(headers?: RequestHeaders): Promise<SalesAgentListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createSalesAgent(input: CreateSalesAgentRequest, headers?: RequestHeaders): Promise<SalesAgent> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async updateSalesAgent(input: UpdateSalesAgentRequest, headers?: RequestHeaders): Promise<SalesAgent> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
