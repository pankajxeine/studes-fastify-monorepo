
export type LoginAttemptRequest = 
{
  app_user_id?: (string) | null
  username_entered: string
  attempted_at?: string
  is_success: boolean
  failure_reason?: (string) | null
  ip_address?: (string) | null
  user_agent?: (string) | null
}
