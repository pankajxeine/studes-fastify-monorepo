
export type NoticeReadResponse = 
{
  id: number
  public_id: string
  record_code: string
  notice_read_id: string
  notice_id: string
  app_user_id: string
  read_at: string
  acknowledged_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
