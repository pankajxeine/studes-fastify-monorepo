
export type UserAlertsRequest = 
{
  id?: number
  service_ticket_id?: number
  customer_id?: number
  alert_type_id?: number
  summary?: string
  alert_priority?: string
  primary_service_request_id?: number
  alert_status?: string
  created_by?: number
  updated_by?: number
}
