
export type WebhookSubscriptionUpdateRequest = 
{
  owner_type: string
  tenant_id: (string) | null
  application_id: (string) | null
  url: string
  event_types: string
  secret_ref: string
  is_active: boolean
  consecutive_failures: number
  disabled_at: (string) | null
}
