
export type StudentMarkRequest = 
{
  exam_schedule_id: string
  student_id: string
  marks_obtained?: (number) | null
  is_absent?: boolean
  is_exempt?: boolean
  percentage?: (string) | null
  grade_label?: (string) | null
  entered_by_staff_id: string
  entered_at?: string
  original_marks?: (number) | null
  moderation_reason?: (string) | null
  moderated_at?: (string) | null
  remarks?: (string) | null
}
