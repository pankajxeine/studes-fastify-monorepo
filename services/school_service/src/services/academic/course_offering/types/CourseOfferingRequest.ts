
export type CourseOfferingRequest = 
{
  course_id: string
  academic_year_id: string
  term_id?: (string) | null
  campus_id: string
  section_id?: (string) | null
  grading_scheme_id?: (string) | null
  room_id?: (string) | null
  offering_code: string
  capacity?: (number) | null
  delivery_mode?: string
  status?: "planned" | "open" | "closed" | "completed" | "cancelled"
}
