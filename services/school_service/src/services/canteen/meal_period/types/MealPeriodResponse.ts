
export type MealPeriodResponse = 
{
  id: number
  public_id: string
  record_code: string
  meal_period_code?: (string) | null
  name: string
  default_start_time?: (string) | null
  default_end_time?: (string) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
