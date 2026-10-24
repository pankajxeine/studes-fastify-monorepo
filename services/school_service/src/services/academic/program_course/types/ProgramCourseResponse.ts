
export type ProgramCourseResponse = 
{
  id: number
  public_id: string
  record_code: string
  program_course_id: string
  program_id: string
  grade_level_id?: (string) | null
  course_id: string
  is_mandatory: boolean
  recommended_term_no?: (number) | null
  effective_from_academic_year_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
