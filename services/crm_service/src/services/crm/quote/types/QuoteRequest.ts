
export type QuoteRequest = 
{
  quote_number?: string
  opportunity_id: string
  account_id: string
  price_book_id: string
  status?: string
  valid_until: string
  subtotal?: string
  discount_total?: string
  total?: string
  max_discount_percent?: string
  coupon_id?: (string) | null
  terms?: (string) | null
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  sent_at?: (string) | null
  accepted_at?: (string) | null
  accepted_by_contact_id?: (string) | null
}
