
export type InboxEventResponse = 
{
  record_code: string
  inbox_event_id: string
  source: string
  message_id: string
  event_type?: (string) | null
  received_at: string
  processed_at?: (string) | null
}
