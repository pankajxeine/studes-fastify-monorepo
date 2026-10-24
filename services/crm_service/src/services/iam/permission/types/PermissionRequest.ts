
export type PermissionRequest = 
{
  permission_code: string
  module: string
  resource: string
  action: string
  name: string
  description?: (string) | null
  is_sensitive?: boolean
  requires_mfa?: boolean
  sort_order?: number
  is_active?: boolean
}
