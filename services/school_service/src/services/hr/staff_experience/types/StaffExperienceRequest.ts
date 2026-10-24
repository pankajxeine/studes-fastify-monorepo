
export type StaffExperienceRequest = 
{
  staff_id: string
  employer_name: string
  job_title: string
  location?: (string) | null
  start_date: string
  end_date?: (string) | null
  responsibilities?: (string) | null
  reason_for_leaving?: (string) | null
  is_verified?: boolean
}
