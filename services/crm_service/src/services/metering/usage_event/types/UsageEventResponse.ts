
export type UsageEventResponse = 
{
  id: number
  public_id: string
  record_code: string
  usage_event_id: string
  tenant_application_id: string
  meter_id: string
  quantity: number
  occurred_at: string
  received_at: string
  idempotency_key: string
  source?: (string) | null
  attributes?: (unknown) | null
}
