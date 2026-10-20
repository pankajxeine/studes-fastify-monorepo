
export type AlertSystemDetailsRequest = 
{
  id?: number
  alert_system_id?: number
  sub_id?: number
  read_at?: string
  alert_read_user_ids?: Record<string, unknown>
}
