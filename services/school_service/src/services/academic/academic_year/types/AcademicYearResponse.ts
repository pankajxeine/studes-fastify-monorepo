
export type AcademicYearResponse = 
{
  id: number
  public_id: string
  record_code: string
  academic_year_id: string
  name: string
  start_date: string
  end_date: string
  span?: (string) | null
  is_current: boolean
  closed_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
