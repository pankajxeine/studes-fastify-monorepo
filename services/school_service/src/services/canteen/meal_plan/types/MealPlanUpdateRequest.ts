
export type MealPlanUpdateRequest = 
{
  canteen_outlet_id: string
  term_id: string
  fee_head_code: string
  code: string
  name: string
  description: (string) | null
  price_amount: string
  meals_per_day: number
  valid_from: string
  valid_to: string
  is_active: boolean
}
