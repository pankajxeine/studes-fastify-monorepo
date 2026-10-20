
export type CrmPagesResponse = 
{
  id?: number
  name?: string
  module_key?: string
  relevant_modules?: Record<string, unknown>
  allow_crm_lms_content?: string
  created_at?: string
  updated_at?: string
}
