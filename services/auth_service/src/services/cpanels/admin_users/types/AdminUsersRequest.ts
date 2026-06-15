export type AdminUsersRequest = 
{
  username?: string
  email?: string
  password?: string
  first_name?: string
  last_name?: string
  phone?: string
  role?: string
  profile_image?: string
  is_verified?: number
  last_login?: string
  status?: string
  password_reset_token?: string
  password_reset_expires?: string
}
