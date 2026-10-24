
export type SponsorshipResponse = 
{
  id: number
  public_id: string
  record_code: string
  sponsorship_id: string
  partner_organization_id: string
  academic_year_id: string
  scholarship_id?: (string) | null
  partner_agreement_id?: (string) | null
  title: string
  sponsorship_kind: string
  committed_amount: string
  received_amount: string
  beneficiary_count?: (number) | null
  status: string
  pledged_on: string
  last_received_on?: (string) | null
  recognition_note?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
