export type CustomerNotesRequest = 
{
  id?: number
  customer_id?: number
  subject?: string
  description?: string
  assignee_id?: number
  created_by?: number
  updated_by?: number
  deleted_at?: string
}
