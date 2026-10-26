
export type TeamMemberResponse = 
{
  record_code: string
  team_member_id: string
  team_id: string
  app_user_id: string
  member_role: string
  valid_from: string
  valid_to?: (string) | null
  created_at: string
  created_by?: (string) | null
}
