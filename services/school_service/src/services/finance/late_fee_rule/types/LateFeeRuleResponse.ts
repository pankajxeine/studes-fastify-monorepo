
export type LateFeeRuleResponse = 
{
  id: number
  public_id: string
  record_code: string
  late_fee_rule_id: string
  campus_id: string
  fee_head_code?: (string) | null
  fee_head_scope?: (string) | null
  name: string
  calc_method: string
  grace_days: number
  amount?: (string) | null
  percent?: (string) | null
  max_amount?: (string) | null
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
