
export type PasswordResetTokenRequest = 
{
  app_user_id: string
  token_hash: string
  channel?: string
  requested_at?: string
  requested_ip?: (string) | null
  issued_by_user_id?: (string) | null
  expires_at: string
  used_at?: (string) | null
  invalidated_at?: (string) | null
}
