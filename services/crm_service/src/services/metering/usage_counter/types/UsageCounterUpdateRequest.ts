
export type UsageCounterUpdateRequest = 
{
  tenant_application_id: string
  meter_id: string
  period_start: string
  period_end: string
  quantity: number
  last_event_at: string
}
