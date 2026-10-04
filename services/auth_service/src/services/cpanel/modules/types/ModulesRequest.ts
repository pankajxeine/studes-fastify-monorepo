
export type ModulesRequest = 
{
  id?: number
  name?: string
  module_key?: string
  permission_option?: string
  relevant_modules?: Record<string, unknown>
  hide_from_package_upgrade?: string
}
