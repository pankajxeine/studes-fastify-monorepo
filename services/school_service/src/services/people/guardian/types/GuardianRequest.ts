
export type GuardianRequest = 
{
  person_id: string
  occupation?: (string) | null
  employer?: (string) | null
  education_level?: (string) | null
  annual_income_band?: (string) | null
  work_phone?: (string) | null
  work_email?: (string) | null
  preferred_contact_channel?: string
  preferred_language?: (string) | null
  notes?: (string) | null
}
