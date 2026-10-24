
export type SubscriptionChangeResponse = 
{
  id: number
  public_id: string
  record_code: string
  subscription_change_id: string
  subscription_id: string
  change_type: string
  from_plan_version_id?: (string) | null
  to_plan_version_id?: (string) | null
  from_quantity?: (number) | null
  to_quantity?: (number) | null
  from_status?: (string) | null
  to_status?: (string) | null
  effective_at: string
  proration_amount?: (string) | null
  reason?: (string) | null
  requested_by_user_id?: (string) | null
  created_at: string
}
