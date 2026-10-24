
export type QuoteLineRequest = 
{
  quote_id: string
  line_no: number
  plan_price_id?: (string) | null
  addon_price_id?: (string) | null
  description: string
  quantity?: number
  list_amount: string
  discount_percent?: string
  net_amount?: (string) | null
}
