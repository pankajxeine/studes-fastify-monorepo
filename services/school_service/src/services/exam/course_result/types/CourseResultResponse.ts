
export type CourseResultResponse = 
{
  id: number
  public_id: string
  record_code: string
  course_result_id: string
  student_id: string
  course_offering_id: string
  term_id: string
  percentage?: (string) | null
  letter_grade?: (string) | null
  grade_point?: (number) | null
  credits_attempted?: (number) | null
  credits_earned?: (number) | null
  quality_points?: (number) | null
  result?: (string) | null
  status: "provisional" | "under_review" | "published" | "withheld"
  is_published?: (boolean) | null
  class_rank?: (number) | null
  computed_at: string
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
