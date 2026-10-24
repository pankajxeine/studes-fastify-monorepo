
export type GradingSchemeRequest = 
{
  code: string
  name: string
  grading_type: string
  pass_percentage?: string
  max_grade_point?: (number) | null
  description?: (string) | null
  is_active?: boolean
}
