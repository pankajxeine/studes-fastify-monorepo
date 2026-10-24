
export type InquiryUpdateRequest = 
{
  campus_id: string
  academic_year_id: (string) | null
  program_id: (string) | null
  grade_level_id: (string) | null
  person_id: (string) | null
  assigned_to_staff_id: (string) | null
  inquiry_source_code: string
  inquiry_no: string
  contact_name: string
  contact_email: (string) | null
  contact_phone: (string) | null
  prospect_name: (string) | null
  prospect_date_of_birth: (string) | null
  status: string
  received_at: string
  next_follow_up_on: (string) | null
  visit_scheduled_at: (string) | null
  lost_reason: (string) | null
  notes: (string) | null
}
