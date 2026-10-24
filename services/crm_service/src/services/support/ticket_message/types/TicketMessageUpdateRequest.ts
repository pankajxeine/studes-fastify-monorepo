
export type TicketMessageUpdateRequest = 
{
  ticket_id: string
  author_type: string
  author_user_id: (string) | null
  author_contact_id: (string) | null
  body: string
  is_internal: boolean
  channel: string
  attachments: (unknown) | null
}
