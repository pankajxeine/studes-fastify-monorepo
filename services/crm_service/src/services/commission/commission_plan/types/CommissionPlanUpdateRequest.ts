
export type CommissionPlanUpdateRequest = 
{
  plan_code: string
  name: string
  currency_code: string
  clawback_days: number
  valid_from: string
  valid_to: (string) | null
  is_active: boolean
}
