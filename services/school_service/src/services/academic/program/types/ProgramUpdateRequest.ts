
export type ProgramUpdateRequest = 
{
  campus_id: string
  department_id: (string) | null
  grading_scheme_id: string
  code: string
  name: string
  level: string
  is_credit_based: boolean
  award_title: (string) | null
  duration_terms: (number) | null
  total_credits_required: (number) | null
  min_credits_per_term: (number) | null
  max_credits_per_term: (number) | null
  description: (string) | null
  is_active: boolean
}
