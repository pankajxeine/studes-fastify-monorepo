
export type MessageUpdateRequest = 
{
  message_thread_id: string
  sender_user_id: string
  body: string
  file_id: (string) | null
  sent_at: string
  edited_at: (string) | null
}
