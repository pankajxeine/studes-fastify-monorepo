
export type PlanRequest = 
{
  application_id: string
  plan_code: string
  name: string
  description?: (string) | null
  tier: number
  is_public?: boolean
  is_active?: boolean
}
