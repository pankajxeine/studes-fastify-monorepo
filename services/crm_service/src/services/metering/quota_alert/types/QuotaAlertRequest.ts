
export type QuotaAlertRequest = 
{
  tenant_application_id: string
  meter_id: string
  period_start: string
  threshold_percent: number
  used_quantity: number
  limit_quantity: number
  triggered_at?: string
  acknowledged_at?: (string) | null
}
