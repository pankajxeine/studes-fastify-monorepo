
export type TemplateVersionRequest = 
{
  template_id: string
  version_no: number
  status?: string
  published_at?: (string) | null
  published_by_user_id?: (string) | null
}
