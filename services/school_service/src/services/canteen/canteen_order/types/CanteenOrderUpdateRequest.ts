
export type CanteenOrderUpdateRequest = 
{
  order_no: string
  canteen_outlet_id: string
  person_id: string
  daily_menu_id: (string) | null
  channel: "pos" | "pre_order" | "kiosk"
  payment_mode: "wallet" | "meal_plan" | "cash" | "card" | "complimentary"
  wallet_id: (string) | null
  meal_subscription_id: (string) | null
  payment_reference: (string) | null
  status: "placed" | "preparing" | "ready" | "served" | "cancelled"
  pickup_date: string
  total_amount: string
  ordered_at: string
  preparing_at: (string) | null
  ready_at: (string) | null
  served_at: (string) | null
  served_by_staff_id: (string) | null
  cancelled_at: (string) | null
  cancel_reason: (string) | null
  placed_by_user_id: (string) | null
  notes: (string) | null
}
