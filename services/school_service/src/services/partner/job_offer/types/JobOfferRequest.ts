
export type JobOfferRequest = 
{
  placement_application_id: string
  student_id: string
  academic_year_id: string
  offer_type: string
  role_title: string
  ctc_amount?: (string) | null
  stipend_amount?: (string) | null
  joining_on?: (string) | null
  end_on?: (string) | null
  work_location?: (string) | null
  offer_letter_file_id?: (string) | null
  status?: "draft" | "extended" | "accepted" | "declined" | "revoked" | "expired"
  offered_at?: (string) | null
  respond_by_on?: (string) | null
  responded_at?: (string) | null
  decline_reason?: (string) | null
  revoked_reason?: (string) | null
}
