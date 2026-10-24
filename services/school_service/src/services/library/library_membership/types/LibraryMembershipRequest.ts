
export type LibraryMembershipRequest = 
{
  person_id: string
  campus_id: string
  membership_no: string
  member_type: string
  max_loans?: number
  loan_period_days?: number
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
  status?: string
  notes?: (string) | null
}
