
export type ModuleResponse = 
{
  id: number
  public_id: string
  record_code: string
  module_id: string
  application_id: string
  module_code: string
  name: string
  description?: (string) | null
  category?: (string) | null
  is_core: boolean
  is_active: boolean
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
