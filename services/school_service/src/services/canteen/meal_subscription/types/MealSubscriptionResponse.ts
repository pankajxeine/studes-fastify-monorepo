
export type MealSubscriptionResponse = 
{
  id: number
  public_id: string
  record_code: string
  meal_subscription_id: string
  meal_plan_id: string
  person_id: string
  invoice_id?: (string) | null
  status: "active" | "suspended" | "cancelled" | "expired"
  start_date: string
  end_date: string
  validity?: (string) | null
  cancelled_at?: (string) | null
  cancel_reason?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
