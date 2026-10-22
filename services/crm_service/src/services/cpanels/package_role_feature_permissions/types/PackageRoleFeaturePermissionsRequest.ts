
export type PackageRoleFeaturePermissionsRequest = 
{
  id?: number
  package_role_mapping_id?: number
  feature_id?: number
  permission?: "full" | "view_only" | "add_update_only" | "none"
}
