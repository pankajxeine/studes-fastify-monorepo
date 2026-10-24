
export type WeeklyMenuItemUpdateRequest = 
{
  weekly_menu_id: string
  canteen_outlet_id: string
  menu_item_id: string
  meal_period_code: string
  day_of_week: string
  planned_qty: (number) | null
  sort_order: number
}
