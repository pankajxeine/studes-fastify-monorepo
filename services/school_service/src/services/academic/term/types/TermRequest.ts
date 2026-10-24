
export type TermRequest = 
{
  academic_year_id: string
  campus_id?: (string) | null
  code: string
  name: string
  kind?: string
  sequence_no: number
  start_date: string
  end_date: string
  span?: (string) | null
  registration_opens_on?: (string) | null
  registration_closes_on?: (string) | null
}
