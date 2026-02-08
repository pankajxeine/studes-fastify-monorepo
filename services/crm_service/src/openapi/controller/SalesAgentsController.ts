import type { SalesAgent } from '../types/SalesAgent'
import type { CreateSalesAgentRequest } from '../types/CreateSalesAgentRequest'
import type { UpdateSalesAgentRequest } from '../types/UpdateSalesAgentRequest'
import type { SalesAgentListResponse } from '../types/SalesAgentListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface SalesAgentsController {
  listSalesAgents(headers?: RequestHeaders): Promise<SalesAgentListResponse>
  createSalesAgent(input: CreateSalesAgentRequest, headers?: RequestHeaders): Promise<SalesAgent>
  updateSalesAgent(input: UpdateSalesAgentRequest, headers?: RequestHeaders): Promise<SalesAgent>
}
