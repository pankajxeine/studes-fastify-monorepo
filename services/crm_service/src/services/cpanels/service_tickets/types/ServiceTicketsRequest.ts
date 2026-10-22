
export type ServiceTicketsRequest = 
{
  id?: number
  customer_id?: number
  service_ticket_type_id?: number
  service_ticket_number?: number
  subject?: string
  st_status?: "Open" | "In-Progress" | "Closed"
  user_id?: number
  assign_users?: number
  industry?: number
  sub_id?: number
  priority?: "High" | "Medium" | "Low" | "Blocker" | "Critical"
  followup_time?: string
  followup_date?: string
  email_followup?: boolean
  caller_name?: string
  call_direction?: "Inbound" | "Outbound"
  primary_service_request_id?: number
  notes?: string
  description?: string
  status?: string
  hours_elapsed?: number
  minutes_elapsed?: number
  is_new_client?: string
  created_by?: number
  updated_by?: number
}
