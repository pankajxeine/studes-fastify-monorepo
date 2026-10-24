
export type TeamMemberUpdateRequest = 
{
  team_id: string
  app_user_id: string
  member_role: string
  valid_from: string
  valid_to: (string) | null
}
