
export type MealPeriodUpdateRequest = 
{
  meal_period_code: (string) | null
  name: string
  default_start_time: (string) | null
  default_end_time: (string) | null
  sort_order: number
  is_active: boolean
}
