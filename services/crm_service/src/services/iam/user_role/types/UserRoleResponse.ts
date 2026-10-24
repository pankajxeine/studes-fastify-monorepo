
export type UserRoleResponse = 
{
  id: number
  public_id: string
  record_code: string
  user_role_id: string
  app_user_id: string
  role_code: string
  scope_type: string
  scope_id?: (string) | null
  valid_from: string
  valid_to?: (string) | null
  grant_source: string
  source_ref_id?: (string) | null
  granted_by_user_id?: (string) | null
  granted_at: string
  revoked_at?: (string) | null
  revoked_by_user_id?: (string) | null
  revoke_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
