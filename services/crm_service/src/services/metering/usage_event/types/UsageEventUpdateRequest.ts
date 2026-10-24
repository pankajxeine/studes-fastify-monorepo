
export type UsageEventUpdateRequest = 
{
  tenant_application_id: string
  meter_id: string
  quantity: number
  received_at: string
  idempotency_key: string
  source: (string) | null
  attributes: (unknown) | null
}
