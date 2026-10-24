
export type ThreadParticipantResponse = 
{
  id: number
  public_id: string
  record_code: string
  thread_participant_id: string
  message_thread_id: string
  app_user_id: string
  joined_at: string
  left_at?: (string) | null
  last_read_at?: (string) | null
  is_muted: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
