
export type MessageThreadResponse = 
{
  id: number
  public_id: string
  record_code: string
  message_thread_id: string
  subject: string
  context_type?: (string) | null
  context_id?: (string) | null
  campus_id?: (string) | null
  created_by_user_id: string
  is_closed: boolean
  closed_at?: (string) | null
  last_message_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
