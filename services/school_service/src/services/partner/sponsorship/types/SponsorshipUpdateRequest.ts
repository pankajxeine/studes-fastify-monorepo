
export type SponsorshipUpdateRequest = 
{
  partner_organization_id: string
  academic_year_id: string
  scholarship_id: (string) | null
  partner_agreement_id: (string) | null
  title: string
  sponsorship_kind: string
  committed_amount: string
  received_amount: string
  beneficiary_count: (number) | null
  status: string
  pledged_on: string
  last_received_on: (string) | null
  recognition_note: (string) | null
  notes: (string) | null
}
