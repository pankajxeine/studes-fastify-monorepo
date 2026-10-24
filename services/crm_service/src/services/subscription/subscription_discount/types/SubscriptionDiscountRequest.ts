
export type SubscriptionDiscountRequest = 
{
  subscription_id: string
  coupon_id: string
  applied_at?: string
  ends_at?: (string) | null
}
