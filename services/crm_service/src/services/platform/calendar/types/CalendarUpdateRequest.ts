
export type CalendarUpdateRequest = 
{
  calendar_code: string
  name: string
  timezone: string
  is_24x7: boolean
  business_hours: (unknown) | null
}
