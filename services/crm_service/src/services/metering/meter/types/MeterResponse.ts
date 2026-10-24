
export type MeterResponse = 
{
  id: number
  public_id: string
  record_code: string
  meter_id: string
  feature_id: string
  meter_code: string
  aggregation: string
  description?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
