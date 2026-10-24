
export type AssessmentWeightResponse = 
{
  id: number
  public_id: string
  record_code: string
  assessment_weight_id: string
  course_offering_id: string
  assessment_type_code: string
  weight_pct: string
  best_of_count?: (number) | null
  is_mandatory: boolean
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
