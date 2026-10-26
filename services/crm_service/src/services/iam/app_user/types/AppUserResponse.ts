
export type AppUserResponse = 
{
  record_code: string
  app_user_id: string
  user_type: string
  username: string
  email: string
  full_name: string
  phone?: (string) | null
  employee_code?: (string) | null
  password_hash?: (string) | null
  sso_provider?: (string) | null
  sso_subject?: (string) | null
  status: string
  default_scope_type: string
  default_scope_id?: (string) | null
  manager_user_id?: (string) | null
  last_login_at?: (string) | null
  failed_login_count: number
  locked_until?: (string) | null
  password_changed_at?: (string) | null
  must_change_password: boolean
  is_mfa_enabled: boolean
  locale: string
  timezone: string
  invited_at?: (string) | null
  activated_at?: (string) | null
  deactivated_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
