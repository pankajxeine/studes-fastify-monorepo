
export type AgentPlanAssignmentRequest = 
{
  sales_agent_id: string
  commission_plan_id: string
  valid_from: string
  valid_to?: (string) | null
}
