
export type PurchaseOrderResponse = 
{
  id: number
  public_id: string
  record_code: string
  purchase_order_id: string
  po_no: string
  vendor_id: string
  campus_id: string
  delivery_room_id?: (string) | null
  status: string
  order_date: string
  expected_delivery_on?: (string) | null
  requested_by_user_id?: (string) | null
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  ordered_at?: (string) | null
  subtotal_amount: string
  tax_amount: string
  total_amount?: (number) | null
  payment_terms?: (string) | null
  cancelled_reason?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
