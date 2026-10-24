
export type EscalationRuleUpdateRequest = 
{
  queue_id: (string) | null
  priority: (string) | null
  metric: string
  minutes_before_breach: number
  action: string
  target_user_id: (string) | null
  target_queue_id: (string) | null
  is_active: boolean
}
