
export type NoticeRequest = 
{
  campus_id?: (string) | null
  title: string
  body: string
  category?: string
  priority?: string
  publish_at?: (string) | null
  expires_at?: (string) | null
  is_pinned?: boolean
  requires_acknowledgement?: boolean
  file_id?: (string) | null
  created_by_user_id: string
  status?: "draft" | "published" | "archived"
}
