
export type HolidayRequest = 
{
  academic_year_id: string
  campus_id?: (string) | null
  name: string
  holiday_kind?: string
  start_date: string
  end_date: string
  is_staff_working_day?: boolean
  description?: (string) | null
}
