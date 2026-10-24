
export type MealSubscriptionUpdateRequest = 
{
  meal_plan_id: string
  person_id: string
  invoice_id: (string) | null
  status: "active" | "suspended" | "cancelled" | "expired"
  start_date: string
  end_date: string
  validity: (string) | null
  cancelled_at: (string) | null
  cancel_reason: (string) | null
  notes: (string) | null
}
