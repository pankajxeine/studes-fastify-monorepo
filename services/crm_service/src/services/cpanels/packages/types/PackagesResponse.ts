
export type PackagesResponse = 
{
  id?: number
  name?: string
  price?: number
  cost_price?: number
  industry_id?: number
  max_users?: number
  package_type?: "Advanced" | "Enhanced" | "Lite"
  status?: "Active" | "Inactive"
  allowed_multiple_stores?: boolean
  additional_price?: number
  additional_cost_price?: number
  permission_based_on?: "Role" | "User"
  test_package?: boolean
  created_at?: string
  updated_at?: string
}
