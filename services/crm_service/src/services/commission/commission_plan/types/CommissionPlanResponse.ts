
export type CommissionPlanResponse = 
{
  record_code: string
  commission_plan_id: string
  plan_code: string
  name: string
  currency_code: string
  clawback_days: number
  valid_from: string
  valid_to?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
