
export type UserFiltersRequest = 
{
  id?: number
  filter_module_id?: number
  filter_name?: string
  filter_fields?: Record<string, unknown>
  created_by?: number
  updated_by?: number
  deleted_at?: string
}
