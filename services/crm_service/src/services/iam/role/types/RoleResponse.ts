
export type RoleResponse = 
{
  record_code: string
  role_id: string
  role_code: string
  name: string
  description?: (string) | null
  persona: string
  allowed_scopes: string
  allowed_user_types: string
  is_privileged: boolean
  requires_mfa: boolean
  max_grant_days?: (number) | null
  is_system: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
