
export type NoticeResponse = 
{
  id: number
  public_id: string
  record_code: string
  notice_id: string
  campus_id?: (string) | null
  title: string
  body: string
  category: string
  priority: string
  publish_at?: (string) | null
  expires_at?: (string) | null
  is_pinned: boolean
  requires_acknowledgement: boolean
  file_id?: (string) | null
  created_by_user_id: string
  status: "draft" | "published" | "archived"
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
