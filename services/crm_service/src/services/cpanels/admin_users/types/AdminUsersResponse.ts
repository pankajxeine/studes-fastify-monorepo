
export type AdminUsersResponse = 
{
  id?: number
  username?: string
  email?: string
  password?: string
  first_name?: string
  last_name?: string
  phone?: string
  role?: string
  profile_image?: string
  is_verified?: boolean
  last_login?: string
  status?: "Active" | "Inactive" | "Suspended" | "Pending"
  password_reset_token?: string
  password_reset_expires?: string
  created_at?: string
  updated_at?: string
}
