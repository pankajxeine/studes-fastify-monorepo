
export type InternshipRequest = 
{
  student_id: string
  partner_organization_id: string
  supervisor_partner_contact_id?: (string) | null
  faculty_mentor_staff_id: string
  job_offer_id?: (string) | null
  title: string
  start_on: string
  end_on: string
  period?: (string) | null
  work_mode?: string
  hours_per_week?: (number) | null
  stipend_amount?: (string) | null
  is_for_credit?: boolean
  credits?: (number) | null
  status?: "planned" | "ongoing" | "completed" | "terminated" | "cancelled"
  evaluation_score?: (number) | null
  supervisor_feedback?: (string) | null
  mentor_feedback?: (string) | null
  terminated_on?: (string) | null
  termination_reason?: (string) | null
}
