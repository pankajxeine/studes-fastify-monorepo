
export type GuestLectureResponse = 
{
  id: number
  public_id: string
  record_code: string
  guest_lecture_id: string
  guest_id: string
  campus_id: string
  course_offering_id?: (string) | null
  event_id?: (string) | null
  coordinator_staff_id: string
  room_id?: (string) | null
  visit_id?: (string) | null
  title: string
  abstract?: (string) | null
  starts_at: string
  ends_at: string
  lecture_period?: (string) | null
  status: "proposed" | "confirmed" | "completed" | "cancelled"
  expected_audience?: (number) | null
  actual_attendance?: (number) | null
  honorarium_amount: string
  honorarium_status: string
  poster_file_id?: (string) | null
  feedback_rating?: (number) | null
  cancelled_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
