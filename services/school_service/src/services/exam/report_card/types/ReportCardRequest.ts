
export type ReportCardRequest = 
{
  student_id: string
  student_enrollment_id: string
  term_id: string
  exam_id?: (string) | null
  kind?: "progress" | "term_end" | "annual"
  status?: "draft" | "generated" | "published" | "withdrawn"
  overall_percentage?: (string) | null
  overall_grade?: (string) | null
  gpa?: (number) | null
  class_rank?: (number) | null
  class_size?: (number) | null
  attendance_pct?: (string) | null
  days_present?: (number) | null
  working_days?: (number) | null
  file_id?: (string) | null
  generated_at?: (string) | null
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  withdrawn_reason?: (string) | null
  acknowledged_at?: (string) | null
  acknowledged_by_person_id?: (string) | null
}
