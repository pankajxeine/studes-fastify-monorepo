
export type AppUserRequest = 
{
  person_id: string
  username: string
  email: string
  password_hash?: (string) | null
  status?: string
  default_campus_id?: (string) | null
  last_login_at?: (string) | null
  failed_login_count?: number
  locked_until?: (string) | null
  password_changed_at?: (string) | null
  must_change_password?: boolean
  is_mfa_enabled?: boolean
  locale?: string
  invited_at?: (string) | null
  activated_at?: (string) | null
}
