
export type GradingSchemeBandResponse = 
{
  id: number
  public_id: string
  record_code: string
  grading_scheme_band_id: string
  grading_scheme_id: string
  grade_label: string
  descriptor?: (string) | null
  min_percentage: string
  max_percentage: string
  percentage_range?: (string) | null
  grade_point: number
  scale_grade_point?: (number) | null
  is_passing: boolean
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
