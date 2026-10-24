
export type CourseOfferingResponse = 
{
  id: number
  public_id: string
  record_code: string
  course_offering_id: string
  course_id: string
  academic_year_id: string
  term_id?: (string) | null
  campus_id: string
  section_id?: (string) | null
  grading_scheme_id?: (string) | null
  room_id?: (string) | null
  offering_code: string
  capacity?: (number) | null
  delivery_mode: string
  status: "planned" | "open" | "closed" | "completed" | "cancelled"
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
