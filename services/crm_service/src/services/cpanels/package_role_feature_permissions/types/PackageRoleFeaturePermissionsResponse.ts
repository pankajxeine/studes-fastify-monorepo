
export type PackageRoleFeaturePermissionsResponse = 
{
  id?: number
  package_role_mapping_id?: number
  feature_id?: number
  permission?: "full" | "view_only" | "add_update_only" | "none"
  created_at?: string
  updated_at?: string
}
