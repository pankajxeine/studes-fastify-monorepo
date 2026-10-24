
export type TeamMemberResponse = 
{
  id: number
  public_id: string
  record_code: string
  team_id: string
  app_user_id: string
  member_role: string
  valid_from: string
  valid_to?: (string) | null
  created_at: string
  created_by?: (string) | null
}
