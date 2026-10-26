
export type CommissionRuleResponse = 
{
  record_code: string
  commission_rule_id: string
  commission_plan_id: string
  hierarchy_depth: number
  application_id?: (string) | null
  plan_id?: (string) | null
  line_types: string
  from_month: number
  to_month?: (number) | null
  rate_percent: string
  priority: number
  created_at: string
  created_by?: (string) | null
}
