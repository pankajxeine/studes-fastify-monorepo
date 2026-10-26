
export type WebhookDeliveryResponse = 
{
  record_code: string
  webhook_delivery_id: string
  webhook_subscription_id: string
  event_id: string
  status: string
  attempts: number
  next_attempt_at: string
  response_code?: (number) | null
  response_ms?: (number) | null
  delivered_at?: (string) | null
  last_error?: (string) | null
}
