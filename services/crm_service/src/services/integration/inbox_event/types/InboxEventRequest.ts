
export type InboxEventRequest = 
{
  source: string
  message_id: string
  event_type?: (string) | null
  received_at?: string
  processed_at?: (string) | null
}
