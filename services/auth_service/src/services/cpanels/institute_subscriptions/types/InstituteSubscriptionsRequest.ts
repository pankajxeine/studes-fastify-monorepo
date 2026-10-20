
export type InstituteSubscriptionsRequest = 
{
  id?: number
  institute_id?: number
  subscription_plan_id?: number
  subscription_start_date?: string
  subscription_end_date?: string
  billing_cycle?: string
  amount_paid?: number
  payment_status?: string
  subscription_status?: string
}
