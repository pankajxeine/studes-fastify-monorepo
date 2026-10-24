
export type SubscriptionItemUpdateRequest = 
{
  subscription_id: string
  addon_price_id: string
  quantity: number
  valid_from: string
  valid_to: (string) | null
}
