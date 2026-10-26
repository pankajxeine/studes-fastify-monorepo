
export type PlanVersionResponse = 
{
  record_code: string
  plan_version_id: string
  plan_id: string
  version_no: number
  status: string
  trial_days: number
  grace_days?: (number) | null
  min_term_months: number
  sla_policy_id?: (string) | null
  notes?: (string) | null
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  retired_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
