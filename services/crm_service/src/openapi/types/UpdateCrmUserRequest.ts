export type UpdateCrmUserRequest = 
{
  full_name?: string
  role_id?: string
  status?: "active" | "inactive"
  phone?: string
}
