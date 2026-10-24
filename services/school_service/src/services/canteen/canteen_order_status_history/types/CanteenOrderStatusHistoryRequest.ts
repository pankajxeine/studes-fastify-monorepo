
export type CanteenOrderStatusHistoryRequest = 
{
  canteen_order_id: string
  from_status?: ("placed" | "preparing" | "ready" | "served" | "cancelled") | null
  to_status: "placed" | "preparing" | "ready" | "served" | "cancelled"
  changed_at?: string
  changed_by_user_id?: (string) | null
  note?: (string) | null
}
