
export type StaffExperienceResponse = 
{
  id: number
  public_id: string
  record_code: string
  staff_experience_id: string
  staff_id: string
  employer_name: string
  job_title: string
  location?: (string) | null
  start_date: string
  end_date?: (string) | null
  responsibilities?: (string) | null
  reason_for_leaving?: (string) | null
  is_verified: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
