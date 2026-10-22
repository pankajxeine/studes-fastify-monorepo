
export type RoleModulePermissionsRequest = 
{
  id?: number
  role_id?: number
  module_id?: number
  permission?: "full" | "view_only" | "add_update_only" | "none"
  created_by?: number
  updated_by?: number
}
