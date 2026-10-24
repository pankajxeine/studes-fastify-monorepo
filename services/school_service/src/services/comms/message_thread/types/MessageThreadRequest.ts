
export type MessageThreadRequest = 
{
  subject: string
  context_type?: (string) | null
  context_id?: (string) | null
  campus_id?: (string) | null
  created_by_user_id: string
  is_closed?: boolean
  closed_at?: (string) | null
  last_message_at?: (string) | null
}
