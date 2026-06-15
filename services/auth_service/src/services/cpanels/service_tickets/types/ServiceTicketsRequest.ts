export type ServiceTicketsRequest = 
{
  id?: number
  customer_id?: number
  service_ticket_type_id?: number
  service_ticket_number?: number
  subject?: string
  st_status?: string
  user_id?: number
  assign_users?: number
  industry?: number
  sub_id?: number
  priority?: string
  followup_time?: string
  followup_date?: string
  email_followup?: string
  caller_name?: string
  call_direction?: string
  primary_service_request_id?: number
  notes?: string
  description?: string
  status?: string
  hours_elapsed?: number
  minutes_elapsed?: number
  is_new_client?: string
  created_by?: number
  updated_by?: number
  deleted_at?: string
}
