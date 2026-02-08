export type CrmUser = 
{
  id: string
  email: string
  full_name: string
  role_id: string
  status: "active" | "inactive"
  phone?: string
  created_at?: string
}
