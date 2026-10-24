
export type MeterRequest = 
{
  feature_id: string
  meter_code: string
  aggregation: string
  description?: (string) | null
  is_active?: boolean
}
