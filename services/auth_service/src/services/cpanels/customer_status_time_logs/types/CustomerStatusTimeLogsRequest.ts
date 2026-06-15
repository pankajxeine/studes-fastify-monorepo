export type CustomerStatusTimeLogsRequest = 
{
  id?: number
  customer_id?: number
  customer_status_id?: number
  hours_lapsed?: number
  minutes_lapsed?: number
  is_active?: string
  created_by?: number
  start_time?: string
  cron_last_updated_at?: string
}
