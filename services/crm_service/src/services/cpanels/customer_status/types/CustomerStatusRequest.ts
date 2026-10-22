
export type CustomerStatusRequest = 
{
  id?: number
  name?: string
  status?: "Active" | "Inactive"
  created_by?: number
  hours?: number
  sequence?: number
  updated_by?: number
}
