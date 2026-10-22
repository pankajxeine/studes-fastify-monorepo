
export type UsersResponse = 
{
  id?: number
  role_id?: number
  username?: string
  password?: string
  firstname?: string
  lastname?: string
  image?: string
  email?: string
  phone?: string
  mobile?: string
  status?: "Active" | "Inactive"
  password_token?: string
  password_expire_at?: string
  access?: string
  alert_priority?: string
  is_admin?: boolean
  user_type?: "Corporate" | "Branch" | "Sales Agent"
  receive_alert?: boolean
  is_default_user?: boolean
  is_omnna_user?: boolean
  university_access_role?: "Level1" | "Level2" | "Level3"
  university_token?: string
  university_industry_id?: number
  university_username?: string
  university_password?: string
  created_by?: number
  updated_by?: number
  created_at?: string
  updated_at?: string
}
