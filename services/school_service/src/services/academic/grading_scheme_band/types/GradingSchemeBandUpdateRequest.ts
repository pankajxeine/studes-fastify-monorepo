
export type GradingSchemeBandUpdateRequest = 
{
  grading_scheme_id: string
  grade_label: string
  descriptor: (string) | null
  min_percentage: string
  max_percentage: string
  percentage_range: (string) | null
  grade_point: number
  scale_grade_point: (number) | null
  is_passing: boolean
  sort_order: number
}
