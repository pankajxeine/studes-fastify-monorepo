
export type AgentPlanAssignmentResponse = 
{
  record_code: string
  agent_plan_assignment_id: string
  sales_agent_id: string
  commission_plan_id: string
  valid_from: string
  valid_to?: (string) | null
  created_at: string
  created_by?: (string) | null
}
