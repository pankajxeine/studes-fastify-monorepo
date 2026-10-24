
export type TeamUpdateRequest = 
{
  team_code: string
  name: string
  function: string
  branch_id: (string) | null
  lead_user_id: (string) | null
  is_active: boolean
}
