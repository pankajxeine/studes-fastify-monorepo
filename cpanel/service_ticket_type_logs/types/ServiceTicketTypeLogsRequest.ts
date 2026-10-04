
export type ServiceTicketTypeLogsRequest = 
{
  id?: number
  service_ticket_id?: number
  service_ticket_type_id?: number
  hours_lapsed?: string
  minutes_lapsed?: string
  is_active?: string
  created_by?: number
  ticket_start_time?: string
  cron_last_updated_at?: string
}
