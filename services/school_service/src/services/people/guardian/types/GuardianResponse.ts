
export type GuardianResponse = 
{
  id: number
  public_id: string
  record_code: string
  guardian_id: string
  person_id: string
  occupation?: (string) | null
  employer?: (string) | null
  education_level?: (string) | null
  annual_income_band?: (string) | null
  work_phone?: (string) | null
  work_email?: (string) | null
  preferred_contact_channel: string
  preferred_language?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
