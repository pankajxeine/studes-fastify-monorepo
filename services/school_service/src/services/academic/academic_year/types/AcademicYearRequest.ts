
export type AcademicYearRequest = 
{
  name: string
  start_date: string
  end_date: string
  span?: (string) | null
  is_current?: boolean
  closed_at?: (string) | null
}
