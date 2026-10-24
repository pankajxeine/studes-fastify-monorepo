
export type QueueRequest = 
{
  queue_code: string
  name: string
  team_id?: (string) | null
  application_id?: (string) | null
  is_default?: boolean
  is_active?: boolean
}
