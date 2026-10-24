
export type RoleUpdateRequest = 
{
  role_code: (string) | null
  name: string
  description: (string) | null
  persona: string
  portal: string
  is_org_wide: boolean
  is_system: boolean
  sort_order: number
  is_active: boolean
}
