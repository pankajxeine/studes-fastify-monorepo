export type InstituteAuditLogsRequest = 
{
  id?: number
  institute_id?: number
  admin_user_id?: number
  action?: string
  module?: string
  payload?: Record<string, unknown>
  ip_address?: string
}
