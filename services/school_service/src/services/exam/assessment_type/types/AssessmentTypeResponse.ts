
export type AssessmentTypeResponse = 
{
  id: number
  public_id: string
  record_code: string
  assessment_type_code?: (string) | null
  name: string
  description?: (string) | null
  category: "formative" | "summative" | "practical" | "coursework"
  is_scheduled_exam: boolean
  default_max_marks?: (number) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
