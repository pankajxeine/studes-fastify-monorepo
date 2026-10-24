
export type PermissionResponse = 
{
  id: number
  public_id: string
  record_code: string
  permission_code: string
  module: string
  resource: string
  action: string
  name: string
  description?: (string) | null
  is_sensitive: boolean
  requires_mfa: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
