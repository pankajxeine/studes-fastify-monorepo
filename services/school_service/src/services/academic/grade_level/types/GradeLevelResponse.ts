
export type GradeLevelResponse = 
{
  id: number
  public_id: string
  record_code: string
  grade_level_id: string
  program_id: string
  code: string
  name: string
  sequence_no: number
  min_entry_age_years?: (number) | null
  is_terminal: boolean
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
