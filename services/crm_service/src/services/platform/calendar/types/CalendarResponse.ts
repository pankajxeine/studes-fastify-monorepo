
export type CalendarResponse = 
{
  id: number
  public_id: string
  record_code: string
  calendar_id: string
  calendar_code: string
  name: string
  timezone: string
  is_24x7: boolean
  business_hours?: (unknown) | null
  created_at: string
  updated_at: string
}
