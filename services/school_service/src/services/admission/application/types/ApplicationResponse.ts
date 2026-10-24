
export type ApplicationResponse = 
{
  id: number
  public_id: string
  record_code: string
  application_id: string
  admission_cycle_id: string
  applicant_person_id: string
  grade_level_id: string
  inquiry_id?: (string) | null
  application_no: string
  status: string
  submitted_at?: (string) | null
  decided_at?: (string) | null
  decided_by_user_id?: (string) | null
  decision_remarks?: (string) | null
  offer_expires_on?: (string) | null
  offer_responded_at?: (string) | null
  waitlist_rank?: (number) | null
  previous_school_name?: (string) | null
  previous_grade_completed?: (string) | null
  has_sibling_in_school: boolean
  application_fee_amount: string
  is_fee_waived: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
