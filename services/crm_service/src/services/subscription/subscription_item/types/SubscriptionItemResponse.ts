
export type SubscriptionItemResponse = 
{
  record_code: string
  subscription_item_id: string
  subscription_id: string
  addon_price_id: string
  quantity: number
  valid_from: string
  valid_to?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
