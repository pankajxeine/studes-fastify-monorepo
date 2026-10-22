
export type RolesResponse = 
{
  id?: number
  name?: string
  description?: string
  status?: "Active" | "Inactive"
  is_admin?: boolean
  created_at?: string
  updated_at?: string
}
