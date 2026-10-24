
export type WeeklyMenuResponse = 
{
  id: number
  public_id: string
  record_code: string
  weekly_menu_id: string
  canteen_outlet_id: string
  name: string
  valid_from: string
  valid_to: string
  validity?: (string) | null
  published_at?: (string) | null
  published_by_user_id?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
