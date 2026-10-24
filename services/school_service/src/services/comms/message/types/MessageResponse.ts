
export type MessageResponse = 
{
  id: number
  public_id: string
  record_code: string
  message_id: string
  message_thread_id: string
  sender_user_id: string
  body: string
  file_id?: (string) | null
  sent_at: string
  edited_at?: (string) | null
  deleted_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
