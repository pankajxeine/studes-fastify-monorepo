
export type InboxEventResponse = 
{
  id: number
  public_id: string
  record_code: string
  source: string
  message_id: string
  event_type?: (string) | null
  received_at: string
  processed_at?: (string) | null
}
