export type SubPackageUserTiersRequest = 
{
  id?: number
  sub_package_id?: number
  user_tier_id?: number
  additional_users?: number
  additional_user_price?: number
  purchased_terms?: Record<string, unknown>
  cancel_date?: string
  cancel_terms?: Record<string, unknown>
  deleted_at?: string
}
