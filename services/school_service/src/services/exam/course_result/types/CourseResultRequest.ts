
export type CourseResultRequest = 
{
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
  status?: "provisional" | "under_review" | "published" | "withheld"
  is_published?: (boolean) | null
  class_rank?: (number) | null
  computed_at?: string
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  remarks?: (string) | null
}
