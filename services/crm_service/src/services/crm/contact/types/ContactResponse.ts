
export type ContactResponse = 
{
  record_code: string
  contact_id: string
  account_id: string
  first_name: string
  last_name: string
  email: string
  phone?: (string) | null
  job_title?: (string) | null
  is_primary: boolean
  is_billing: boolean
  is_technical: boolean
  marketing_consent: boolean
  preferred_locale: string
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
