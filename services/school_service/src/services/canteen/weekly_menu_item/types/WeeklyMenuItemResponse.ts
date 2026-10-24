
export type WeeklyMenuItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  weekly_menu_item_id: string
  weekly_menu_id: string
  canteen_outlet_id: string
  menu_item_id: string
  meal_period_code: string
  day_of_week: string
  planned_qty?: (number) | null
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
