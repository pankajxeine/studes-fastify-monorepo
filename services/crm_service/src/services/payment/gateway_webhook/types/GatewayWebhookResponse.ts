
export type GatewayWebhookResponse = 
{
  id: number
  public_id: string
  record_code: string
  gateway_webhook_id: string
  gateway: string
  event_id: string
  event_type: string
  payload: unknown
  signature_valid: boolean
  received_at: string
  processed_at?: (string) | null
  error?: (string) | null
}
