
export type RoleResponse = 
{
  id: number
  public_id: string
  record_code: string
  role_code?: (string) | null
  name: string
  description?: (string) | null
  persona: string
  portal: string
  is_org_wide: boolean
  is_system: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
