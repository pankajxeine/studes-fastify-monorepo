
export type PartnerContactRequest = 
{
  partner_organization_id: string
  person_id: string
  job_title?: (string) | null
  department?: (string) | null
  is_primary?: boolean
  can_post_drives?: boolean
  start_on?: string
  end_on?: (string) | null
  is_active?: boolean
  notes?: (string) | null
}
