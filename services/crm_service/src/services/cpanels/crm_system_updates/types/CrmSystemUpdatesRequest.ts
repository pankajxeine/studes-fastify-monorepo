
export type CrmSystemUpdatesRequest = 
{
  id?: number
  publish_date?: string
  subject?: string
  description?: string
  status?: "Active" | "Inactive"
  created_by?: number
  updated_by?: number
}
