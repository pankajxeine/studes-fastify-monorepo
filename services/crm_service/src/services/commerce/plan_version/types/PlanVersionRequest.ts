
export type PlanVersionRequest = 
{
  plan_id: string
  version_no: number
  status?: string
  trial_days?: number
  grace_days?: (number) | null
  min_term_months?: number
  sla_policy_id?: (string) | null
  notes?: (string) | null
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  retired_at?: (string) | null
}
