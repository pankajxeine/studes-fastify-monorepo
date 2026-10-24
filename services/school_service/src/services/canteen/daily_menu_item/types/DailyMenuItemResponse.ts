
export type DailyMenuItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  daily_menu_item_id: string
  daily_menu_id: string
  canteen_outlet_id: string
  menu_item_id: string
  price_amount: string
  planned_qty?: (number) | null
  sold_qty: number
  is_sold_out: boolean
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
