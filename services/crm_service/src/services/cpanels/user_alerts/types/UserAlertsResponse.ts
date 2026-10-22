
export type UserAlertsResponse = 
{
  id?: number
  service_ticket_id?: number
  customer_id?: number
  alert_type_id?: number
  summary?: string
  alert_priority?: "High" | "Medium" | "Low" | "Blocker" | "Critical"
  primary_service_request_id?: number
  alert_status?: "Open" | "Closed"
  created_by?: number
  updated_by?: number
  created_at?: string
  updated_at?: string
}
