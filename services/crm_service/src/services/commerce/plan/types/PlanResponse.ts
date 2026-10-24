
export type PlanResponse = 
{
  id: number
  public_id: string
  record_code: string
  plan_id: string
  application_id: string
  plan_code: string
  name: string
  description?: (string) | null
  tier: number
  is_public: boolean
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
