
export type AppUserResponse = 
{
  id: number
  public_id: string
  record_code: string
  app_user_id: string
  person_id: string
  username: string
  email: string
  password_hash?: (string) | null
  status: string
  default_campus_id?: (string) | null
  last_login_at?: (string) | null
  failed_login_count: number
  locked_until?: (string) | null
  password_changed_at?: (string) | null
  must_change_password: boolean
  is_mfa_enabled: boolean
  locale: string
  invited_at?: (string) | null
  activated_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
