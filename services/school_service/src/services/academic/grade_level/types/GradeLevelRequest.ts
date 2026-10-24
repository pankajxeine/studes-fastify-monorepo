
export type GradeLevelRequest = 
{
  program_id: string
  code: string
  name: string
  sequence_no: number
  min_entry_age_years?: (number) | null
  is_terminal?: boolean
  is_active?: boolean
}
