
export type UserFiltersResponse = 
{
  id?: number
  filter_module_id?: number
  filter_name?: string
  filter_fields?: Record<string, unknown>
  created_by?: number
  updated_by?: number
  created_at?: string
  updated_at?: string
  deleted_at?: string
}
