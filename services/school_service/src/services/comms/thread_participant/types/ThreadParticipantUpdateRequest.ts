
export type ThreadParticipantUpdateRequest = 
{
  message_thread_id: string
  app_user_id: string
  joined_at: string
  left_at: (string) | null
  last_read_at: (string) | null
  is_muted: boolean
}
