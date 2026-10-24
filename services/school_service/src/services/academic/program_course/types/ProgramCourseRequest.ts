
export type ProgramCourseRequest = 
{
  program_id: string
  grade_level_id?: (string) | null
  course_id: string
  is_mandatory?: boolean
  recommended_term_no?: (number) | null
  effective_from_academic_year_id?: (string) | null
}
