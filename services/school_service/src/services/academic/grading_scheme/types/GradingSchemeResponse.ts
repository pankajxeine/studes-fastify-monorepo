
export type GradingSchemeResponse = 
{
  id: number
  public_id: string
  record_code: string
  grading_scheme_id: string
  code: string
  name: string
  grading_type: string
  pass_percentage: string
  max_grade_point?: (number) | null
  description?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
