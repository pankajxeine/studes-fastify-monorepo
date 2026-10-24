
export type StudentMarkResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_mark_id: string
  exam_schedule_id: string
  student_id: string
  marks_obtained?: (number) | null
  is_absent: boolean
  is_exempt: boolean
  percentage?: (string) | null
  grade_label?: (string) | null
  entered_by_staff_id: string
  entered_at: string
  original_marks?: (number) | null
  moderation_reason?: (string) | null
  moderated_at?: (string) | null
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
