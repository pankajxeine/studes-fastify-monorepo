
export type DailyMenuItemRequest = 
{
  daily_menu_id: string
  canteen_outlet_id: string
  menu_item_id: string
  price_amount: string
  planned_qty?: (number) | null
  sold_qty?: number
  is_sold_out?: boolean
  sort_order?: number
}
