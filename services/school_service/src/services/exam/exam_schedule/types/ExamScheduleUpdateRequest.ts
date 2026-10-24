
export type ExamScheduleUpdateRequest = 
{
  exam_id: string
  course_offering_id: string
  room_id: (string) | null
  exam_date: string
  start_time: string
  end_time: string
  sitting: (string) | null
  max_marks: number
  pass_marks: (number) | null
  invigilator_staff_id: (string) | null
  status: "scheduled" | "held" | "postponed" | "cancelled"
  marks_status: "not_started" | "in_progress" | "submitted" | "verified"
  marks_submitted_at: (string) | null
  marks_verified_at: (string) | null
  marks_verified_by_user_id: (string) | null
  instructions: (string) | null
}
