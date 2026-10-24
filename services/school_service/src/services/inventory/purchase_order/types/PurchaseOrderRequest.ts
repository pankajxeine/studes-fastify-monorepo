
export type PurchaseOrderRequest = 
{
  po_no: string
  vendor_id: string
  campus_id: string
  delivery_room_id?: (string) | null
  status?: string
  order_date?: string
  expected_delivery_on?: (string) | null
  requested_by_user_id?: (string) | null
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  ordered_at?: (string) | null
  subtotal_amount?: string
  tax_amount?: string
  total_amount?: (number) | null
  payment_terms?: (string) | null
  cancelled_reason?: (string) | null
  notes?: (string) | null
}
