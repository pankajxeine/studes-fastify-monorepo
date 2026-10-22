
export type ServiceTicketTypesResponse = 
{
  id?: number
  name?: string
  status?: "Active" | "Inactive"
  created_by?: number
  hours?: number
  sequence?: number
  updated_by?: number
  created_at?: string
  updated_at?: string
}
