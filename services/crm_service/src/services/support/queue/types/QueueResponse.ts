
export type QueueResponse = 
{
  id: number
  public_id: string
  record_code: string
  queue_id: string
  queue_code: string
  name: string
  team_id?: (string) | null
  application_id?: (string) | null
  is_default: boolean
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
