
export type PasswordResetTokenResponse = 
{
  id: number
  public_id: string
  record_code: string
  password_reset_token_id: string
  app_user_id: string
  token_hash: string
  channel: string
  requested_at: string
  requested_ip?: (string) | null
  issued_by_user_id?: (string) | null
  expires_at: string
  used_at?: (string) | null
  invalidated_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
