
export type CanteenOrderStatusHistoryResponse = 
{
  id: number
  public_id: string
  record_code: string
  canteen_order_status_history_id: string
  canteen_order_id: string
  from_status?: ("placed" | "preparing" | "ready" | "served" | "cancelled") | null
  to_status: "placed" | "preparing" | "ready" | "served" | "cancelled"
  changed_at: string
  changed_by_user_id?: (string) | null
  note?: (string) | null
  created_at: string
  created_by?: (string) | null
}
