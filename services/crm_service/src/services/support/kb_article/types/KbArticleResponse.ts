
export type KbArticleResponse = 
{
  record_code: string
  kb_article_id: string
  slug: string
  application_id?: (string) | null
  module_id?: (string) | null
  locale: string
  title: string
  body_md: string
  status: string
  visibility: string
  version_no: number
  author_user_id: string
  published_at?: (string) | null
  created_at: string
  updated_at: string
}
