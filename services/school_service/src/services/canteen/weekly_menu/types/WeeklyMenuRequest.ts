
export type WeeklyMenuRequest = 
{
  canteen_outlet_id: string
  name: string
  valid_from: string
  valid_to: string
  validity?: (string) | null
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  notes?: (string) | null
}
