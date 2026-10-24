
export type NoticeReadUpdateRequest = 
{
  notice_id: string
  app_user_id: string
  read_at: string
  acknowledged_at: (string) | null
}
