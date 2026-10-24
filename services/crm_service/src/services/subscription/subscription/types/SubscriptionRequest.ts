
export type SubscriptionRequest = 
{
  subscription_number?: string
  tenant_application_id: string
  billing_account_id: string
  plan_version_id: string
  plan_price_id: string
  quote_id?: (string) | null
  status: string
  quantity?: number
  discount_percent?: string
  trial_ends_at?: (string) | null
  started_at?: string
  current_period_start: string
  current_period_end: string
  grace_until?: (string) | null
  cancel_at?: (string) | null
  cancelled_at?: (string) | null
  cancel_reason?: (string) | null
  auto_renew?: boolean
  contract_ref?: (string) | null
  sales_agent_id?: (string) | null
}
