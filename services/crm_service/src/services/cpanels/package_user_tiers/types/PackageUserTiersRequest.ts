
export type PackageUserTiersRequest = 
{
  id?: number
  user_tier_id?: number
  package_id?: number
  price?: number
  cost_price?: number
  status?: "Active" | "Inactive"
  created_by?: number
  updated_by?: number
}
