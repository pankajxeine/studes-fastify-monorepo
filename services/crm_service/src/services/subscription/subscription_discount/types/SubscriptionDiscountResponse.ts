
export type SubscriptionDiscountResponse = 
{
  record_code: string
  subscription_discount_id: string
  subscription_id: string
  coupon_id: string
  applied_at: string
  ends_at?: (string) | null
  created_by?: (string) | null
}
