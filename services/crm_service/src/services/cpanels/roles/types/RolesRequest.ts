
export type RolesRequest = 
{
  id?: number
  name?: string
  description?: string
  status?: "Active" | "Inactive"
  is_admin?: boolean
}
