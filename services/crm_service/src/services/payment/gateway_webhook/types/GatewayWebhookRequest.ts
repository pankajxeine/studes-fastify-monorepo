
export type GatewayWebhookRequest = 
{
  gateway: string
  event_id: string
  event_type: string
  payload: unknown
  signature_valid: boolean
  received_at?: string
  processed_at?: (string) | null
  error?: (string) | null
}
