
export type PermissionRequest = 
{
  permission_code?: (string) | null
  module: string
  resource: string
  action: string
  name: string
  description?: (string) | null
  is_sensitive?: boolean
  sort_order?: number
  is_active?: boolean
}
