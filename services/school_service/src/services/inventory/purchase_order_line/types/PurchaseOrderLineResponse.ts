
export type PurchaseOrderLineResponse = 
{
  id: number
  public_id: string
  record_code: string
  purchase_order_line_id: string
  purchase_order_id: string
  line_no: number
  item_id: string
  description?: (string) | null
  quantity: number
  unit_price_amount: string
  tax_rate: string
  line_amount?: (number) | null
  received_quantity: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
