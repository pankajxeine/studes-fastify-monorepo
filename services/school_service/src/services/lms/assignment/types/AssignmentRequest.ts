
export type AssignmentRequest = 
{
  course_offering_id: string
  created_by_staff_id: string
  assessment_type_code?: string
  title: string
  instructions: string
  attachment_file_id?: (string) | null
  submission_mode?: "file" | "text" | "file_or_text" | "offline"
  max_marks: number
  published_at?: (string) | null
  due_at: string
  allow_late?: boolean
  late_until?: (string) | null
  late_penalty_pct?: string
  max_attempts?: number
  is_group_work?: boolean
  status?: "draft" | "published" | "closed" | "cancelled"
  closed_at?: (string) | null
  cancelled_reason?: (string) | null
}
