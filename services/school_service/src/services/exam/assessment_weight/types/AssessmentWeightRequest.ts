
export type AssessmentWeightRequest = 
{
  course_offering_id: string
  assessment_type_code: string
  weight_pct: string
  best_of_count?: (number) | null
  is_mandatory?: boolean
  remarks?: (string) | null
}
