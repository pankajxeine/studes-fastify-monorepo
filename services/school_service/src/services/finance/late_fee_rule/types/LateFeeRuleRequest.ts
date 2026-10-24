
export type LateFeeRuleRequest = 
{
  campus_id: string
  fee_head_code?: (string) | null
  fee_head_scope?: (string) | null
  name: string
  calc_method: string
  grace_days?: number
  amount?: (string) | null
  percent?: (string) | null
  max_amount?: (string) | null
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
  is_active?: boolean
}
