
export type ScholarshipUpdateRequest = 
{
  academic_year_id: string
  campus_id: (string) | null
  code: string
  name: string
  sponsor_name: (string) | null
  description: (string) | null
  discount_kind: string
  discount_value: number
  max_amount: (string) | null
  budget_amount: (string) | null
  awarded_amount: string
  max_awards: (number) | null
  eligibility_criteria: (string) | null
  application_deadline: (string) | null
  status: string
}
