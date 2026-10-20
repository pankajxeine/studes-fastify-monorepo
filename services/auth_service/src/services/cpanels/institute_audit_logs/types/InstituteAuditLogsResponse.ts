
export type InstituteAuditLogsResponse = 
{
  id?: number
  institute_id?: number
  admin_user_id?: number
  action?: string
  module?: string
  payload?: Record<string, unknown>
  ip_address?: string
  created_at?: string
}
