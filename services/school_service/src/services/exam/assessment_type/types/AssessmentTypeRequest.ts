
export type AssessmentTypeRequest = 
{
  assessment_type_code?: (string) | null
  name: string
  description?: (string) | null
  category: "formative" | "summative" | "practical" | "coursework"
  is_scheduled_exam?: boolean
  default_max_marks?: (number) | null
  sort_order?: number
  is_active?: boolean
}
