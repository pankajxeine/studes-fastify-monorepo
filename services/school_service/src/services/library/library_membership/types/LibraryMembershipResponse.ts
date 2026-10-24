
export type LibraryMembershipResponse = 
{
  id: number
  public_id: string
  record_code: string
  library_membership_id: string
  person_id: string
  campus_id: string
  membership_no: string
  member_type: string
  max_loans: number
  loan_period_days: number
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
  status: string
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
