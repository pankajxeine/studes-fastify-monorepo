
export type AlumniEmploymentRequest = 
{
  alumnus_id: string
  employer_name: string
  job_title: string
  employment_type?: string
  industry?: (string) | null
  city?: (string) | null
  country_code?: (string) | null
  start_date: string
  end_date?: (string) | null
  is_primary?: boolean
  is_current?: (boolean) | null
  description?: (string) | null
}
