
export type FeeStructureResponse = 
{
  id: number
  public_id: string
  record_code: string
  fee_structure_id: string
  academic_year_id: string
  campus_id: string
  program_id: string
  grade_level_id?: (string) | null
  code: string
  name: string
  description?: (string) | null
  status: string
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
