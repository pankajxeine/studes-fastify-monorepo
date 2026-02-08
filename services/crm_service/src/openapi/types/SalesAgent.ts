export type SalesAgent = 
{
  id: string
  full_name: string
  email: string
  phone?: string
  status: "active" | "inactive"
  branch_id?: string
}
