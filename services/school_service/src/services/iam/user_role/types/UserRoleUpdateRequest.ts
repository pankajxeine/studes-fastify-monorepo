
export type UserRoleUpdateRequest = 
{
  app_user_id: string
  role_code: string
  campus_id: (string) | null
  valid_from: string
  valid_to: (string) | null
  granted_by_user_id: (string) | null
  granted_at: string
  revoked_at: (string) | null
  revoked_by_user_id: (string) | null
  revoke_reason: (string) | null
}
