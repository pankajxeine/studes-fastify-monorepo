
export type AssignmentSubmissionResponse = 
{
  id: number
  public_id: string
  record_code: string
  assignment_submission_id: string
  assignment_id: string
  student_id: string
  attempt_no: number
  submitted_at: string
  submission_text?: (string) | null
  file_id?: (string) | null
  is_late: boolean
  status: string
  marks_awarded?: (number) | null
  penalty_marks: number
  final_marks?: (number) | null
  feedback?: (string) | null
  graded_by_staff_id?: (string) | null
  graded_at?: (string) | null
  returned_at?: (string) | null
  resubmit_reason?: (string) | null
  similarity_pct?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
