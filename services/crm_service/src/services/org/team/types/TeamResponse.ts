
export type TeamResponse = 
{
  record_code: string
  team_id: string
  team_code: string
  name: string
  function: string
  branch_id?: (string) | null
  lead_user_id?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
