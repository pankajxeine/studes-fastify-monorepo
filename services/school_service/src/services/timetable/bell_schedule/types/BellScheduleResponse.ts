
export type BellScheduleResponse = 
{
  id: number
  public_id: string
  record_code: string
  bell_schedule_id: string
  campus_id: string
  code: string
  name: string
  description?: (string) | null
  applies_from?: (string) | null
  applies_to?: (string) | null
  validity?: (string) | null
  is_default: boolean
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
