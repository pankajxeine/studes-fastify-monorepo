
export type ActivityResponse = 
{
  id: number
  public_id: string
  record_code: string
  activity_id: string
  activity_type: string
  subject: string
  body?: (string) | null
  related_type: string
  related_id: string
  owner_user_id: string
  due_at?: (string) | null
  completed_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
