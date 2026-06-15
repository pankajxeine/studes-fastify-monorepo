export type SubPackagesRequest = 
{
  id?: number
  sub_id?: number
  package_id?: number
  package_name?: string
  package_price?: number
  package_max_user?: number
  package_max_product?: number
  permission_based_on?: string
  additional_users?: number
  additional_store_price?: number
  additional_user_price?: number
  discount?: number
  billing_date?: string
  expiry_date?: string
  deleted_at?: string
}
