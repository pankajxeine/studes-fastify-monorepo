
export type AssignmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  assignment_id: string
  course_offering_id: string
  created_by_staff_id: string
  assessment_type_code: string
  title: string
  instructions: string
  attachment_file_id?: (string) | null
  submission_mode: "file" | "text" | "file_or_text" | "offline"
  max_marks: number
  published_at?: (string) | null
  due_at: string
  allow_late: boolean
  late_until?: (string) | null
  late_penalty_pct: string
  max_attempts: number
  is_group_work: boolean
  status: "draft" | "published" | "closed" | "cancelled"
  closed_at?: (string) | null
  cancelled_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
