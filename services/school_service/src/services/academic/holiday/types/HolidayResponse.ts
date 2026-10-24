
export type HolidayResponse = 
{
  id: number
  public_id: string
  record_code: string
  holiday_id: string
  academic_year_id: string
  campus_id?: (string) | null
  name: string
  holiday_kind: string
  start_date: string
  end_date: string
  is_staff_working_day: boolean
  description?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
