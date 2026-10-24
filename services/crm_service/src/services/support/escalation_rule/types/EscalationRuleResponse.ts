
export type EscalationRuleResponse = 
{
  id: number
  public_id: string
  record_code: string
  escalation_rule_id: string
  queue_id?: (string) | null
  priority?: (string) | null
  metric: string
  minutes_before_breach: number
  action: string
  target_user_id?: (string) | null
  target_queue_id?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
}
