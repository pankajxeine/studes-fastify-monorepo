
export type ModulesResponse = 
{
  id?: number
  name?: string
  module_key?: string
  permission_option?: string
  relevant_modules?: Record<string, unknown>
  hide_from_package_upgrade?: boolean
  created_at?: string
  updated_at?: string
}
