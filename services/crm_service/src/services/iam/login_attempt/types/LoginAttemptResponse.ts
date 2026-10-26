
export type LoginAttemptResponse = 
{
  record_code: string
  login_attempt_id: string
  app_user_id?: (string) | null
  username_entered: string
  auth_method: string
  attempted_at: string
  is_success: boolean
  failure_reason?: (string) | null
  ip_address?: (string) | null
  geo_country?: (string) | null
  user_agent?: (string) | null
  risk_score?: (number) | null
}
