
export type TemplateVersionResponse = 
{
  record_code: string
  template_version_id: string
  template_id: string
  version_no: number
  status: string
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
}
