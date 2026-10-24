
export type LoginAttemptResponse = 
{
  id: number
  public_id: string
  record_code: string
  login_attempt_id: string
  app_user_id?: (string) | null
  username_entered: string
  attempted_at: string
  is_success: boolean
  failure_reason?: (string) | null
  ip_address?: (string) | null
  user_agent?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
