
export type FeeStructureRequest = 
{
  academic_year_id: string
  campus_id: string
  program_id: string
  grade_level_id?: (string) | null
  code: string
  name: string
  description?: (string) | null
  status?: string
  published_at?: (string) | null
  published_by_user_id?: (string) | null
}
