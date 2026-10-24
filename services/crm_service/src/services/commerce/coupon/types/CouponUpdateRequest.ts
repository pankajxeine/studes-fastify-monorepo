
export type CouponUpdateRequest = 
{
  coupon_code: string
  name: string
  discount_type: string
  discount_value: number
  currency_code: (string) | null
  duration: string
  duration_months: (number) | null
  max_redemptions: (number) | null
  redeemed_count: number
  valid_from: string
  valid_to: (string) | null
  applies_to_plan_ids: (string) | null
  is_active: boolean
}
