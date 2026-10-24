
export type AlumniEmploymentResponse = 
{
  id: number
  public_id: string
  record_code: string
  alumni_employment_id: string
  alumnus_id: string
  employer_name: string
  job_title: string
  employment_type: string
  industry?: (string) | null
  city?: (string) | null
  country_code?: (string) | null
  start_date: string
  end_date?: (string) | null
  is_primary: boolean
  is_current?: (boolean) | null
  description?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
