
export type PartnerContactResponse = 
{
  id: number
  public_id: string
  record_code: string
  partner_contact_id: string
  partner_organization_id: string
  person_id: string
  job_title?: (string) | null
  department?: (string) | null
  is_primary: boolean
  can_post_drives: boolean
  start_on: string
  end_on?: (string) | null
  is_active: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
