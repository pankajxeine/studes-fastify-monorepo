
export type WebhookSubscriptionResponse = 
{
  id: number
  public_id: string
  record_code: string
  webhook_subscription_id: string
  owner_type: string
  tenant_id?: (string) | null
  application_id?: (string) | null
  url: string
  event_types: string
  secret_ref: string
  is_active: boolean
  consecutive_failures: number
  disabled_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
