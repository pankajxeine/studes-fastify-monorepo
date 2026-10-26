
export type InvoiceLineResponse = 
{
  record_code: string
  invoice_line_id: string
  invoice_id: string
  line_no: number
  line_type: string
  description: string
  plan_price_id?: (string) | null
  addon_price_id?: (string) | null
  subscription_item_id?: (string) | null
  feature_id?: (string) | null
  coupon_id?: (string) | null
  period_start?: (string) | null
  period_end?: (string) | null
  quantity: number
  unit_amount: string
  discount_amount: string
  tax_rate_id?: (string) | null
  tax_rate: string
  tax_amount: string
  net_amount?: (string) | null
}
