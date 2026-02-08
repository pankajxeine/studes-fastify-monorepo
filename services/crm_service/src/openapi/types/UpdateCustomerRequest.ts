export type UpdateCustomerRequest = 
{
  name?: string
  email?: string
  phone?: string
  status?: "active" | "inactive"
  company?: string
}
