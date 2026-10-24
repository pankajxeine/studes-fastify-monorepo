
export type PurchaseOrderLineUpdateRequest = 
{
  purchase_order_id: string
  line_no: number
  item_id: string
  description: (string) | null
  quantity: number
  unit_price_amount: string
  tax_rate: string
  line_amount: (number) | null
  received_quantity: number
}
