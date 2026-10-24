
export type DailyMenuResponse = 
{
  id: number
  public_id: string
  record_code: string
  daily_menu_id: string
  canteen_outlet_id: string
  meal_period_code: string
  menu_date: string
  weekly_menu_id?: (string) | null
  status: "draft" | "published" | "closed"
  pre_order_cutoff_at?: (string) | null
  published_at?: (string) | null
  closed_at?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
