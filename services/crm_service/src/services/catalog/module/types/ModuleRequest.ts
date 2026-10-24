
export type ModuleRequest = 
{
  application_id: string
  module_code: string
  name: string
  description?: (string) | null
  category?: (string) | null
  is_core?: boolean
  is_active?: boolean
  sort_order?: number
}
