
export type UserRoleRequest = 
{
  app_user_id: string
  role_code: string
  scope_type?: string
  scope_id?: (string) | null
  valid_from?: string
  valid_to?: (string) | null
  grant_source?: string
  source_ref_id?: (string) | null
  granted_by_user_id?: (string) | null
  granted_at?: string
  revoked_at?: (string) | null
  revoked_by_user_id?: (string) | null
  revoke_reason?: (string) | null
}
