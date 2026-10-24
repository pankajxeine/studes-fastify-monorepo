
export type TicketRequest = 
{
  ticket_number?: string
  tenant_id?: (string) | null
  account_id: string
  contact_id?: (string) | null
  application_id?: (string) | null
  module_id?: (string) | null
  queue_id: string
  category: string
  subject: string
  description: string
  channel: string
  priority?: string
  status?: string
  assignee_user_id?: (string) | null
  sla_policy_id: string
  first_response_due_at: string
  resolution_due_at: string
  first_responded_at?: (string) | null
  resolved_at?: (string) | null
  closed_at?: (string) | null
  sla_paused_at?: (string) | null
  first_response_breached?: boolean
  resolution_breached?: boolean
  reopened_count?: number
  parent_ticket_id?: (string) | null
  external_ref?: (string) | null
}
