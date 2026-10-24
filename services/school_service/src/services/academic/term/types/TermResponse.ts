
export type TermResponse = 
{
  id: number
  public_id: string
  record_code: string
  term_id: string
  academic_year_id: string
  campus_id?: (string) | null
  code: string
  name: string
  kind: string
  sequence_no: number
  start_date: string
  end_date: string
  span?: (string) | null
  registration_opens_on?: (string) | null
  registration_closes_on?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
